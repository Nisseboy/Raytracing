//raytracing-fragment.glsl


//Reference: https://www.youtube.com/watch?v=Qz0KTGYJtUk


varying vec2 vUv;

uniform float time;
uniform vec2 resolution;

uniform vec3 cameraPos;
uniform vec2 cameraRot;
uniform float fov;

uniform int bounceLimit ;
uniform int raysPerPixel;
uniform float divergeStrength;
uniform float defocusStrength;
uniform float focusDist;


uniform sampler2D lastFrame;
uniform int renderedFrames;


//Sky
uniform bool hasSky;
uniform vec3 skyColorHorizon;
uniform vec3 skyColorZenith;
uniform vec3 sunLightDirection;
uniform float sunFocus;
uniform float sunIntensity;
uniform vec3 groundColor;


#define PI 3.141592653


struct HitResult {
  bool hit;
  float dist;
  int ob;
  vec3 hitPoint;
  vec3 normal;
};

struct Ray {
  vec3 pos;
  vec3 dir;
};

struct Ob {
  int type;
  vec3 pos;
  vec3 dims;
  vec3 dims2;
  int mat;
  bool exists;
};

struct Mat {
  vec3 color;
  vec3 emissionColor;
  float emissionStrength;
  float smoothness;
  float specProb;
  vec3 specularColor;
};

uniform int numObs;
uniform Ob obs[12];

uniform Mat mats[12];


uint randState;
float rand() {
  randState *= (randState + 195439u) * (randState + 124395u) * (randState + 845921u);
  return float(randState) / 4294967295.0;
}
float randNormalDistribution() {
  float theta = 2.0 * PI * rand();
  float rho = sqrt(-2.0 * log(rand()));
  return rho * cos(theta);
}
vec3 randDirection() {
  vec3 pos = vec3(randNormalDistribution(), randNormalDistribution(), randNormalDistribution());
  return normalize(pos);
}
vec3 randHemisphereDirection(vec3 normal) {
  vec3 dir = randDirection();
  return dir * sign(dot(normal, dir));
}
vec2 randPointInCircle() {
  float rad = rand() * PI * 2.0;
  vec2 point = vec2(cos(rad), sin(rad));
  return point * sqrt(rand());
}


vec3 rotate(vec3 vector, float pitch, float yaw, float roll) {
  mat3 rotMatrixX = mat3(
    vec3(cos(yaw), 0.0, sin(yaw)),
    vec3(0.0, 1.0, 0.0),
    vec3(-sin(yaw), 0.0, cos(yaw))
  );
  mat3 rotMatrixY = mat3(
    vec3(1.0, 0.0, 0.0),
    vec3(0.0, cos(pitch), -sin(pitch)),
    vec3(0.0, sin(pitch), cos(pitch))
  );
  mat3 rotMatrixZ = mat3(
    vec3(cos(roll), -sin(roll), 0.0),
    vec3(sin(roll), cos(roll), 0.0),
    vec3(0.0, 0.0, 1.0)
  );
  

  return vector * rotMatrixZ * rotMatrixY * rotMatrixX;
}


HitResult raySphere(Ob ob, Ray ray) {
  HitResult result;
  vec3 offsetOrigin = ray.pos - ob.pos;

  float a = dot(ray.dir, ray.dir);
  float b = 2.0 * dot(offsetOrigin, ray.dir);
  float c = dot(offsetOrigin, offsetOrigin) - ob.dims.x * ob.dims.x;

  float discriminant = b * b - 4.0 * a * c;

  if (discriminant >= 0.0) { //Hit
    float dist = (-b - sqrt(discriminant)) / (2.0 * a);

    if (dist >= 0.0) { //Intersection is in front of the ray
      result.hit = true;
      result.dist = dist;
      result.hitPoint = ray.pos + ray.dir * dist;
      result.normal = normalize(result.hitPoint - ob.pos);
    }
  } else {
    result.hit = false;
  }

  return result;
}

HitResult rayTri(Ob tri, Ray ray) {
  vec3 posA = tri.pos;
  vec3 posB = tri.dims;
  vec3 posC = tri.dims2;

  vec3 edgeAB = posB - posA;
  vec3 edgeAC = posC  - posA;
  vec3 normal = cross(edgeAB, edgeAC);
  
  vec3 ao = ray.pos - posA;
  vec3 dao = cross(ao, ray.dir);

  float determinant = -dot(ray.dir, normal);
  float invDet = 1.0 / determinant;

  float dist = dot(ao, normal) * invDet;
  float u = dot(edgeAC, dao) * invDet;
  float v = -dot(edgeAB, dao) * invDet;

  HitResult result;
  result.hit = determinant >= 0.000001 && dist >= 0.0 && u >= 0.0 && v >= 0.0 && (u+v) <= 1.0;
  result.hitPoint = ray.pos + ray.dir * dist;
  result.normal = normalize(normal);
  result.dist = dist;
  return result;
}

HitResult rayQuad(Ob quad, Ray ray) {
  vec3 pos = quad.pos;
  vec2 dims = quad.dims.xy;
  vec3 rot = radians(quad.dims2);

  vec3 tl = pos + rotate(vec3(-dims.x, dims.y, 0.0) / 2.0, rot.y, rot.x, rot.z);
  vec3 tr = pos + rotate(vec3(dims.x, dims.y, 0.0) / 2.0, rot.y, rot.x, rot.z);
  vec3 br = pos + rotate(vec3(dims.x, -dims.y, 0.0) / 2.0, rot.y, rot.x, rot.z);
  vec3 bl = pos + rotate(vec3(-dims.x, -dims.y, 0.0) / 2.0, rot.y, rot.x, rot.z);

  Ob tri1;
  tri1.pos = tl;
  tri1.dims = tr;
  tri1.dims2 = bl;

  Ob tri2;
  tri2.pos = tr;
  tri2.dims = br;
  tri2.dims2 = bl;

  HitResult result1 = rayTri(tri1, ray);
  HitResult result2 = rayTri(tri2, ray);

  if (result1.hit) return result1;
  return result2;
}

HitResult rayAny(Ob ob, Ray ray) {
  if (ob.type == 0) {
    return raySphere(ob, ray);
  }
  if (ob.type == 1) {
    return rayTri(ob, ray);
  }
  if (ob.type == 2) {
    return rayQuad(ob, ray);
  }
}


vec3 getEnvLight(Ray ray) {
  if (!hasSky) return vec3(0.0);
  
  float skyGradientT = pow(smoothstep(0.0, 0.4, ray.dir.y), 0.35);
  vec3 skyGradient = mix(skyColorHorizon / 255.0, skyColorZenith / 255.0, skyGradientT);
  float sun = pow(max(0.0, dot(ray.dir, -normalize(sunLightDirection))), sunFocus) * sunIntensity;

  float groundToSkyT = smoothstep(-0.01, 0.0, ray.dir.y);
  float sunMask = float(groundToSkyT >= 1.0);
  return mix(groundColor / 255.0, skyGradient, groundToSkyT) + sun * sunMask;
}


HitResult closestOb(Ray ray) {
  float closestDist = 9999999.0;
  HitResult bestHit;

  for (int i = 0; i < numObs; i++) {
    if (!obs[i].exists) continue;
    HitResult result = rayAny(obs[i], ray);

    if (result.hit && result.dist < closestDist) {
      closestDist = result.dist;
      bestHit = result;
      bestHit.ob = i;
    }
  }

  return bestHit; 
}

vec3 traceRay(Ray ray) {
  vec3 incomingLight = vec3(0.0);
  vec3 rayColor = vec3(1.0);

  for (int i = 0; i < bounceLimit; i++) {
    HitResult result = closestOb(ray);

    if (!result.hit) {
      incomingLight += getEnvLight(ray) * rayColor;
      break;
    }

    Ob ob = obs[result.ob];
    Mat mat = mats[ob.mat];

    /*
    bool a = result.hitPoint.x > 0.0;
    bool b = result.hitPoint.z > 0.0;
    if ((a || b) && !(a && b)) {
      mat.color *= 0.9;
    }
    */

    ray.pos = result.hitPoint;
    vec3 diffuseDir = normalize(result.normal + randDirection());
    vec3 specularDir = reflect(ray.dir, result.normal);
    bool isSpecularBounce = mat.specProb >= rand();
    ray.dir = mix(diffuseDir, specularDir, mat.smoothness * float(isSpecularBounce));
    
    vec3 emittedLight = mat.emissionColor / 255.0 * mat.emissionStrength;
    incomingLight += emittedLight * rayColor;
    rayColor *= mix(mat.color / 255.0, mat.specularColor / 255.0, float(isSpecularBounce));

    float p = max(rayColor.r, max(rayColor.g, rayColor.b));
    if (rand() >= p) {
      break;
    }
    rayColor *= 1.0f / p; 
  }

  return incomingLight;
}

vec3 aces(vec3 x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

void main() {
  randState = uint((gl_FragCoord.y * resolution.x + gl_FragCoord.x) / resolution.x / resolution.y * 4294967295.0);
  randState += uint(time * 719393.0);


  vec3 camForward = normalize(rotate(vec3(0.0, 0.0, 1.0), radians(cameraRot.y), radians(cameraRot.x), 0.0));
  vec3 camRight = normalize(rotate(vec3(1.0, 0.0, 0.0), radians(cameraRot.y), radians(cameraRot.x), 0.0));
  vec3 camUp = normalize(rotate(vec3(0.0, 1.0, 0.0), radians(cameraRot.y), radians(cameraRot.x), 0.0));


  vec2 uv = gl_FragCoord.xy / resolution - 0.5;
  vec2 aspectRatio = vec2(resolution.x / resolution.y, 1.0);

  float screenHeight = focusDist * tan(radians(fov) / 2.0) * 2.0;
  float screenWidth = screenHeight * aspectRatio.x;
  vec3 bottomLeftLoc = vec3(-screenWidth / 2.0, -screenHeight / 2.0, focusDist);

  vec3 screenPosLoc = bottomLeftLoc + vec3(vec2(screenWidth, screenHeight) * (uv / 2.0 + 0.5), 0.0);
  vec3 screenPos = cameraPos + rotate(screenPosLoc, radians(cameraRot.y), radians(cameraRot.x), 0.0);


  vec3 rayCol = vec3(0.0);
  for (int i = 0; i < raysPerPixel; i++) {
    Ray ray;
    vec2 defocusJitter = randPointInCircle() * defocusStrength / resolution.y;
    ray.pos = cameraPos + camRight * defocusJitter.x + camUp * defocusJitter.y;
    
    vec2 jitter = randPointInCircle() * divergeStrength / resolution.y;
    vec3 jitteredScreenPos = screenPos + camRight * jitter.x + camUp * jitter.y;
    ray.dir = normalize(jitteredScreenPos - ray.pos);

    rayCol += traceRay(ray);
  }
  rayCol /= float(raysPerPixel);

  //rayCol = aces(rayCol);

  if (renderedFrames > 2) {
    float weight = 1.0 / (float(renderedFrames) + 1.0);
    
    gl_FragColor = texture2D(lastFrame, gl_FragCoord.xy / resolution) * (1.0 - weight) + vec4(rayCol, 1.0) * weight;
  } else {
    gl_FragColor = vec4(rayCol, 1.0);
  }
}