//raytracing-vertex.glsl
varying vec2 vUv;

void main() {
  vUv = position.xy + vec2(0.5);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}