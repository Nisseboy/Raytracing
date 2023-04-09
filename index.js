(async function(){


let pressed = {};
const moveSpeed = 1;
const rotSpeed = 2;

const boxSize = 45;

let types = ["sphere", "tri", "quad"];

const obs = [
  { 
    type: 2, //Quad
    pos: new THREE.Vector3(0, 0, boxSize / 2),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(0, 0, 0),
    mat: 0,
    exists: true,
  },
  { 
    type: 2, //Quad
    pos: new THREE.Vector3(0, 0, -boxSize / 2),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(180, 0, 0),
    mat: 1,
    exists: true,
  },
  { 
    type: 2, //Quad
    pos: new THREE.Vector3(-boxSize / 2, 0, 0),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(-90, 0, 0),
    mat: 2,
    exists: true,
  },
  { 
    type: 2, //Quad
    pos: new THREE.Vector3(boxSize / 2, 0, 0),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(90, 0, 0),
    mat: 3,
    exists: true,
  },
  { 
    type: 2, //Quad
    pos: new THREE.Vector3(0, -boxSize / 2, 0),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(0, 90, 0),
    mat: 4,
    exists: true,
  },
  { 
    type: 2, //Quad
    pos: new THREE.Vector3(0, boxSize / 2, 0),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(0, -90, 0),
    mat: 5,
    exists: true,
  },

  { //Lamp
    type: 2, //Quad
    pos: new THREE.Vector3(0, boxSize / 2 - 0.001 , 0),
    dims: new THREE.Vector3(boxSize / 3, boxSize / 3, 0),
    dims2: new THREE.Vector3(0, -90, 0),
    mat: 6,
    exists: true,
  },
  
  { //Sphere 1 
    type: 0, //Sphere
    pos: new THREE.Vector3(0, 0, 0),
    dims: new THREE.Vector3(5, 0, 0),
    dims2: new THREE.Vector3(0, 0, 0),
    mat: 7,
    exists: true,
  },
  { //Sphere 1 
    type: 0, //Sphere
    pos: new THREE.Vector3(-12, 0, 0),
    dims: new THREE.Vector3(5, 0, 0),
    dims2: new THREE.Vector3(0, 0, 0),
    mat: 8,
    exists: true,
  },
  { //Sphere 1 
    type: 0, //Sphere
    pos: new THREE.Vector3(12, 0, 0),
    dims: new THREE.Vector3(5, 0, 0),
    dims2: new THREE.Vector3(0, 0, 0),
    mat: 9,
    exists: true,
  },
  {
    type: 0, //Sphere
    pos: new THREE.Vector3(6, -15, 0),
    dims: new THREE.Vector3(3, 0, 0),
    dims2: new THREE.Vector3(0, 0, 0),
    mat: 10,
    exists: true,
  },
];

const mats = [
  { // Back wall
    color: new THREE.Vector3(255, 255, 255),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 0,
    specProb: 0
  },
  { // Front wall
    color: new THREE.Vector3(252, 217, 220),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 0,
    specProb: 0
  },
  { // Left wall
    color: new THREE.Vector3(255, 0, 0),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 0,
    specProb: 0
  },
  { // Right wall
    color: new THREE.Vector3(0, 255, 0),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 0,
    specProb: 0
  },
  { // Bottom wall
    color: new THREE.Vector3(255, 255, 255),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 1,
    specProb: 0.1
  },
  { // Top wall
    color: new THREE.Vector3(46, 52, 57),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 0,
    specProb: 0
  },
  { // Lamp
    color: new THREE.Vector3(0, 0, 0),
    emissionColor: new THREE.Vector3(255, 255, 255),
    emissionStrength: 10,
    smoothness: 0,
    specProb: 0
  },
  { // Sphere 1
    color: new THREE.Vector3(200, 200, 200),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 1,
    specProb: 0.5
  },
  { // Sphere 1
    color: new THREE.Vector3(200, 200, 200),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 1,
    specProb: 1
  },
  { // Sphere 1
    color: new THREE.Vector3(200, 200, 200),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 1,
    specProb: 0.02
  },
  {
    color: new THREE.Vector3(0, 200, 200),
    emissionColor: new THREE.Vector3(0, 200, 200),
    emissionStrength: 10,
    smoothness: 0.5,
    specProb: 0.02
  },
];

// Create the materials
const raytracingMat = await new Material("raytracing", {
  time: { value: 0 },
  resolution: { value: new THREE.Vector2() },

  cameraPos: { value: new THREE.Vector3(0, 0, -45) },
  cameraRot: { value: new THREE.Vector2(0, 0) },

  fov: {value: 90.0},
  bounceLimit: {value: 5},
  raysPerPixel: {value: 10},

  divergeStrength: {value: 1},
  defocusStrength: {value: 0},
  focusDist: {value: 1},

  obs: {value: padArray(obs, 12)},
  mats: {value: padArray(mats, 12)},
  numObs: {value: obs.length},

  lastFrame: {type: "t", value: null},
  renderedFrames: {value: 0},

  //The sky
  hasSky: {value: false},
  skyColorHorizon: {value: new THREE.Vector3(252, 249, 252)},
  skyColorZenith: {value: new THREE.Vector3(82, 170, 232)},
  groundColor: {value: new THREE.Vector3(167, 155, 167)},
  sunLightDirection: {value: new THREE.Vector3(1, -1, -0.5)},
  sunFocus: {value: 256},
  sunIntensity: {value: 40},
});
let uniforms = raytracingMat.uniforms;
const screenMat = new THREE.MeshBasicMaterial();


// Create a new WebGL renderer
let canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({canvas});

// Create a new scene
const raytracingScene = new THREE.Scene();
const screenScene = new THREE.Scene();

// Create a new camera
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

//Create the rendertargets needed for progressive rendering.
let rt1 = new THREE.WebGLRenderTarget(512, 512, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBFormat });
let rt2 = new THREE.WebGLRenderTarget(512, 512, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBFormat });

// Set clock
const clock = new THREE.Clock();

// Create a new geometry
const geometry = new THREE.PlaneGeometry(2, 2);

//Create the meshes and add the mto the scenes
const raytracingMesh = new THREE.Mesh(geometry, raytracingMat);
const screenMesh = new THREE.Mesh(geometry, screenMat);
raytracingScene.add(raytracingMesh);
screenScene.add(screenMesh);


// Updating uniforms
window.onresize = resize;
resize();

document.addEventListener("keydown", keypressed);
document.addEventListener("keyup", keyreleased);

// Render the scene
function render() {
  requestAnimationFrame(render);
  
  //Update the uniforms
  uniforms.time.value = clock.getElapsedTime();

  //Keyboard input
  let shiftMult = pressed["shift"]?0.2:1; 

  let rotate = {x: 0, y: 0};
  if (pressed["arrowleft"]) {
    rotate.x += -1;
  }
  if (pressed["arrowright"]) {
    rotate.x += 1;
  }
  if (pressed["arrowup"]) {
    rotate.y += -1;
  }
  if (pressed["arrowdown"]) {
    rotate.y += 1;
  }

  uniforms.cameraRot.value.x += rotate.x * rotSpeed * shiftMult;
  uniforms.cameraRot.value.y += rotate.y * rotSpeed * shiftMult;


  let localMove = {x: 0, y: 0, z: 0};
  if (pressed["w"]) {
    localMove.z += 1;
  }
  if (pressed["s"]) {
    localMove.z += -1;
  }
  if (pressed["a"]) {
    localMove.x += -1;
  }
  if (pressed["d"]) {
    localMove.x += 1;
  }
  if (pressed[" "]) {
    localMove.y += 1;
  }
  if (pressed["c"]) {
    localMove.y += -1;
  }

  let globalMove = {
    x: localMove.x * moveSpeed * shiftMult,
    y: localMove.y * moveSpeed * shiftMult,
    z: localMove.z * moveSpeed * shiftMult,
  };

  let rotX = uniforms.cameraRot.value.x * Math.PI / 180;
  let rotY = uniforms.cameraRot.value.y * Math.PI / 180;
  let rotationMatrixYaw = [
    [Math.cos(rotX), 0.0, Math.sin(rotX)],
    [0.0, 1.0, 0.0],
    [-Math.sin(rotX), 0.0, Math.cos(rotX)]
  ];
  let rotationMatrixPitch = [
    [1.0, 0.0, 0.0],
    [0.0, Math.cos(rotY), -Math.sin(rotY)],
    [0.0, Math.sin(rotY), Math.cos(rotY)]
  ];

  let forward = matMultVec(rotationMatrixYaw, matMultVec(rotationMatrixPitch, globalMove));

  uniforms.cameraPos.value.x += forward.x;
  uniforms.cameraPos.value.y += forward.y;
  uniforms.cameraPos.value.z += forward.z;
  
  if (localMove.x || localMove.y || localMove.z || rotate.x || rotate.y) {
    uniforms.lastFrame.value = null;
    uniforms.renderedFrames.value = 0;
  }



  if (uniforms.renderedFrames.value == 0) {
    screenMat.visible = false;
    renderer.render(screenScene, camera, rt1);
    screenMat.visible = true;
  }

  uniforms.lastFrame.value = rt1.texture;
  uniforms.renderedFrames.value++;



  renderer.setRenderTarget(rt2);
  renderer.render(raytracingScene, camera);

  screenMat.map = rt2.texture;
  screenMat.needsUpdate = true;

  renderer.setRenderTarget(null);
  renderer.render(screenScene, camera);

  let temp = rt1;
  rt1 = rt2;
  rt2 = temp;
}
render();



function keypressed(e) {
  pressed[e.key.toLowerCase()] = true;
}
function keyreleased(e) {
  pressed[e.key.toLowerCase()] = false;
}

//Event for when screen is resized
function resize() {
  uniforms.resolution.value.x = window.innerWidth;
  uniforms.resolution.value.y = window.innerHeight;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  rt1.setSize(window.innerWidth, window.innerHeight);
  rt2.setSize(window.innerWidth, window.innerHeight);

  uniforms.lastFrame.value = null;
  uniforms.renderedFrames.value = 0;

  screenMat.map = null;
  screenMat.needsUpdate = true;
}


//Pads an array with copies of the first object because glsl is mean
function padArray(arr, len) {
  let nArr = [];
  for (let i = 0; i < len; i++) {
    if (i < arr.length) {
      nArr.push(arr[i]);
    } else {
      nArr.push(arr[0]);
    }
  }
  return nArr;
}



//multiplies a vector by a matrix
function matMultVec(matrix, vector) {
  let result = [];
  for (var i = 0; i < 3; i++) {
    let sum = 0;
    for (var j = 0; j < 3; j++) {
      sum += matrix[i][j] * vector[["x","y","z"][j]];
    }
    result.push(sum);
  }
  
  return {x: result[0], y: result[1], z: result[2]};
}


function vec3ToHex(vec) {
  let r = vec.x.toString(16);
  let g = vec.y.toString(16);
  let b = vec.z.toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return `#${r}${g}${b}`;
}
function hexToVec3(hex) {
  return new THREE.Vector3(
    parseInt(hex[1] + hex[2], 16),
    parseInt(hex[3] + hex[4], 16),
    parseInt(hex[5] + hex[6], 16),
  );
}


//The controls panel
let controlsElem = document.getElementsByClassName("controls-submenu")[0];
document.getElementsByClassName("controls-toggle")[0].addEventListener("click", e => {
  controlsElem.classList.toggle("open");
});

function createControlShell(name, type, hasValue, value = 0) {
  let elem = document.createElement("div");
  elem.className = `control ${type}`;
  
  let nameElem = document.createElement("div");
  nameElem.className = "name";
  nameElem.innerText = name;
  elem.appendChild(nameElem);

  let inputHolderElem = document.createElement("div");
  inputHolderElem.className = "input-holder";
  elem.appendChild(inputHolderElem);

  let valueElem;
  if (hasValue) {
    valueElem = document.createElement("div");
    valueElem.className = "value";
    valueElem.innerText = value;
    inputHolderElem.appendChild(valueElem);
  }

  let inputElem = document.createElement("input");
  inputElem.type = type;
  inputHolderElem.appendChild(inputElem);

  inputElem.addEventListener("keydown", e => {
    e.preventDefault();
    return false;
  });

  return {
    elem,
    nameElem,
    inputHolderElem,
    valueElem,
    inputElem
  };
}
function createControlRange(name, value, min, max, clearScreen, callback = ()=>{}) {
  let shell = createControlShell(name, "range", true, value);

  shell.inputElem.value = value;
  shell.inputElem.min = min;
  shell.inputElem.max = max;

  shell.inputElem.addEventListener("input", e => {
    shell.valueElem.innerText = shell.inputElem.value;
    if (clearScreen) {
      uniforms.lastFrame.value = null;
      uniforms.renderedFrames.value = 0;

      screenMat.map = null;
      screenMat.needsUpdate = true;
    }
    callback(shell.inputElem.value);
  });

  return shell.elem;
}
function createControlCheck(name, value, clearScreen, callback = () => {}) {
  let shell = createControlShell(name, "checkbox", false);

  shell.inputElem.checked = value;

  shell.inputElem.addEventListener("change", e => {
    if (clearScreen) {
      uniforms.lastFrame.value = null;
      uniforms.renderedFrames.value = 0;

      screenMat.map = null;
      screenMat.needsUpdate = true;
    }
    canvas.focus();
    callback(shell.inputElem.checked);
  });

  return shell.elem;
}
function createControlColor(name, value, clearScreen, callback = () => {}) {
  let shell = createControlShell(name, "color", false);

  shell.inputElem.value = vec3ToHex(value);

  shell.inputElem.addEventListener("input", e => {
    if (clearScreen) {
      uniforms.lastFrame.value = null;
      uniforms.renderedFrames.value = 0;

      screenMat.map = null;
      screenMat.needsUpdate = true;
    }
    
    callback(hexToVec3(shell.inputElem.value));
  });

  return shell.elem;
}
function createControlVector(name, value, bounds, clearScreen, callback = () => {}) {
  let shell = createControlShell(name, "vector", false);
  shell.inputHolderElem.replaceChildren();
  
  let dims = Object.keys(value).length;

  let submenu = createControlMenu(`Vec${dims}`, false);
  shell.inputHolderElem.appendChild(submenu[0]);
  shell.inputHolderElem.appendChild(submenu[1]);
  submenu = submenu[1];

  for (let i = 0; i < dims; i++) {
    let dim = ["x","y","z"][i];
    let range = createControlRange(dim, value[dim], -bounds, bounds, clearScreen, (val)=>{
      value[dim] = parseFloat(val);
      callback(value);
    });
    
    range.children[1].children[1].step = 0.1;

    submenu.appendChild(range);
  }

  
  setInterval(()=>{
    let sliders = submenu.getElementsByTagName("input");
    for (let i = 0; i < sliders.length; i++) {
      let dim = ["x","y","z"][i];
      let slider = sliders[i];
      
      slider.value = value[dim];
      slider.previousSibling.innerText = Math.round(value[dim] * 10) / 10;
    }
  }, 16.66);

  return shell.elem;
}
function createControlObject(index) {
  let ob = obs[index];
  let type = types[ob.type];

  let elem = document.createElement("div");
  let menu = createControlMenu(index + " - " + type, false);
  elem.appendChild(menu[0]);
  elem.appendChild(menu[1]);
  menu = menu[1];

  let posElem = createControlVector("Pos", ob.pos, 50, true);
  menu.appendChild(posElem);

  if (type == "sphere") {

    let radiusElem = createControlRange("Radius", ob.dims.x, 0, 20, true, (val) => {
      ob.dims.x = val;
    });
    radiusElem.children[1].children[1].step = "0.1";
    menu.appendChild(radiusElem);

  } else if (type == "tri") {

    let posElem2 = createControlVector("Pos", ob.dims, 50, true);
    menu.appendChild(posElem2);
    let posElem3 = createControlVector("Pos", ob.dims2, 50, true);
    menu.appendChild(posElem3);

  } else if (type == "quad") {

    let dimsElem = createControlVector("Dimensions", new THREE.Vector2(ob.dims.x, ob.dims.y), 50, true, (val) => {
      ob.dims.x = val.x;
      ob.dims.y = val.y;
    });
    menu.appendChild(dimsElem);

    let rotElem = createControlVector("Rotation", new THREE.Vector2(ob.dims2.x, ob.dims2.y), 360, true, (val) => {
      ob.dims2.x = val.x;
      ob.dims2.y = val.y;
    });
    menu.appendChild(rotElem);

  }

  let matElem = createControlRange("Material", ob.mat, 0, mats.length, true, val => {
    ob.mat = val;
  });
  menu.appendChild(matElem);

  let existsElem = createControlCheck("Active", ob.exists, true, val => {
    ob.exists = val;
  });
  menu.appendChild(existsElem);

  return elem;
}
function createControlMat(index) {
  let mat = mats[index];

  let elem = document.createElement("div");
  let menu = createControlMenu(index, false);
  elem.appendChild(menu[0]);
  elem.appendChild(menu[1]);

  elem.className = "control-mat-list";

  menu = menu[1];

  let colorElem = createControlColor("Color", mat.color, true, val => {
    mat.color = val;
  });
  menu.appendChild(colorElem);

  let emColorElem = createControlColor("Emission Color", mat.emissionColor, true, val => {
    mat.emissionColor = val;
  });
  menu.appendChild(emColorElem);

  let emStrengthElem = createControlRange("Emission Strength", mat.emissionStrength, 0, 10, true, val => {
    mat.emissionStrength = val;
  });
  emStrengthElem.children[1].children[1].step = 0.01;
  menu.appendChild(emStrengthElem);

  let smoothnessElem = createControlRange("Smoothness", mat.smoothness, 0, 1, true, val => {
    mat.smoothness = val;
  });
  smoothnessElem.children[1].children[1].step = 0.01;
  menu.appendChild(smoothnessElem);

  let specProbElem = createControlRange("Specular Prob.", mat.specProb, 0, 1, true, val => {
    mat.specProb = val;
  });
  specProbElem.children[1].children[1].step = 0.01;
  menu.appendChild(specProbElem);

  return elem;
}



function createControlMenu(name, open) {
  let toggleElem = document.createElement("button");
  toggleElem.className = "controls-toggle";
  toggleElem.innerText = name;

  let elem = document.createElement("div");
  elem.className = `controls-submenu${open?" open":""}`;

  toggleElem.addEventListener("click", e => {
    elem.classList.toggle("open");
  });

  return [toggleElem, elem];
}

controlsElem.appendChild(createControlRange("Bounce Limit", uniforms.bounceLimit.value, 1, 20, true, (value)=>{
  uniforms.bounceLimit.value = value;
}));
controlsElem.appendChild(createControlRange("Rays/Pixel", uniforms.raysPerPixel.value, 1, 100, true, (value)=>{
  uniforms.raysPerPixel.value = value;
}));


let camMenu = createControlMenu("Camera", true);
controlsElem.appendChild(camMenu[0]);
controlsElem.appendChild(camMenu[1]);
camMenu = camMenu[1];
camMenu.appendChild(createControlVector("Position", uniforms.cameraPos.value, 100, true, (value)=>{
  
}));
camMenu.appendChild(createControlVector("Rotation", uniforms.cameraRot.value, 360, true, (value)=>{
  
}));
camMenu.appendChild(createControlRange("FOV", uniforms.fov.value, 10, 179, true, (value)=>{
  uniforms.fov.value = value;
}));
camMenu.appendChild(createControlRange("Divergence", uniforms.divergeStrength.value, 0, 100, true, (value)=>{
  uniforms.divergeStrength.value = value;
}));
camMenu.appendChild(createControlRange("Defocus", uniforms.defocusStrength.value, 0, 200, true, (value)=>{
  uniforms.defocusStrength.value = value;
}));
camMenu.appendChild(createControlRange("Focus Plane", uniforms.focusDist.value, 1, 100, true, (value)=>{
  uniforms.focusDist.value = value;
}));


let skyMenu = createControlMenu("Skybox", false);
controlsElem.appendChild(skyMenu[0]);
controlsElem.appendChild(skyMenu[1]);
skyMenu = skyMenu[1];
skyMenu.appendChild(createControlCheck("Skybox", uniforms.hasSky.value, true, (value)=>{
  uniforms.hasSky.value = value;
}));
skyMenu.appendChild(createControlColor("Col Horizon", uniforms.skyColorHorizon.value, true, (value)=>{
  uniforms.skyColorHorizon.value = value;
}));
skyMenu.appendChild(createControlColor("Col Zenith", uniforms.skyColorZenith.value, true, (value)=>{
  uniforms.skyColorZenith.value = value;
}));
skyMenu.appendChild(createControlColor("Col Ground", uniforms.groundColor.value, true, (value)=>{
  uniforms.groundColor.value = value;
}));
skyMenu.appendChild(createControlVector("Sun Dir", uniforms.sunLightDirection.value, 10, true, (value)=>{
  
}));
skyMenu.appendChild(createControlRange("Sun Focus", uniforms.sunFocus.value, 0, 500, true, (value)=>{
  uniforms.sunFocus.value = value;
}));
skyMenu.appendChild(createControlRange("Sun Intensity", uniforms.sunIntensity.value, 0, 100, true, (value)=>{
  uniforms.sunIntensity.value = value;
}));


let obMenu = createControlMenu("Objects", false);
controlsElem.appendChild(obMenu[0]);
controlsElem.appendChild(obMenu[1]);
obMenu = obMenu[1];
for (let i = 0; i < obs.length; i++) {
  obMenu.appendChild(createControlObject(i));
}

let matMenu = createControlMenu("Materials", false);
controlsElem.appendChild(matMenu[0]);
controlsElem.appendChild(matMenu[1]);
matMenu = matMenu[1];
for (let i = 0; i < mats.length; i++) {
  matMenu.appendChild(createControlMat(i));
}


})();