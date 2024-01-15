import * as THREE from 'three';
import Material from './material.js';

let pressed = {};
const moveSpeed = 1;
const rotSpeed = 2;

const boxSize = 45;

let sizeDivisions = 2;

let types = ["sphere", "tri", "quad"];

const obs = [
 /* { //Focus plane
    type: 2, //Quad
    pos: new THREE.Vector3(0, 0, 0),
    dims: new THREE.Vector3(1000, 1000, 0),
    dims2: new THREE.Vector3(0, 0, 0),
    mat: 0,
    exists: true,
  },*/
  { 
    type: 2, //Quad
    name: "Back Wall",
    pos: new THREE.Vector3(0, 0, boxSize / 2),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(0, 0, 0),
    mat: 0,
    exists: true,
  },
  { 
    type: 2, //Quad
    name: "Front Wall",
    pos: new THREE.Vector3(0, 0, -boxSize / 2),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(180, 0, 0),
    mat: 1,
    exists: true,
  },
  { 
    type: 2, //Quad
    name: "Left Wall",
    pos: new THREE.Vector3(-boxSize / 2, 0, 0),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(-90, 0, 0),
    mat: 2,
    exists: true,
  },
  { 
    type: 2, //Quad
    name: "Right Wall",
    pos: new THREE.Vector3(boxSize / 2, 0, 0),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(90, 0, 0),
    mat: 3,
    exists: true,
  },
  { 
    type: 2, //Quad
    name: "Floor",
    pos: new THREE.Vector3(0, -boxSize / 2, 0),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(0, 90, 0),
    mat: 4,
    exists: true,
  },
  { 
    type: 2, //Quad
    name: "Roof",
    pos: new THREE.Vector3(0, boxSize / 2, 0),
    dims: new THREE.Vector3(boxSize, boxSize, 0),
    dims2: new THREE.Vector3(0, -90, 0),
    mat: 5,
    exists: true,
  },

  {
    type: 2, //Quad
    name: "Lamp",
    pos: new THREE.Vector3(0, boxSize / 2 - 0.001 , 0),
    dims: new THREE.Vector3(boxSize / 3, boxSize / 3, 0),
    dims2: new THREE.Vector3(0, -90, 0),
    mat: 6,
    exists: true,
  },
  
  {
    type: 0, //Sphere
    name: "Left Sphere",
    pos: new THREE.Vector3(-12, 0, 0),
    dims: new THREE.Vector3(5, 0, 0),
    dims2: new THREE.Vector3(0, 0, 0),
    mat: 7,
    exists: true,
  },
  {
    type: 0, //Sphere
    name: "Middle Sphere",
    pos: new THREE.Vector3(0, 0, 0),
    dims: new THREE.Vector3(5, 0, 0),
    dims2: new THREE.Vector3(0, 0, 0),
    mat: 8,
    exists: true,
  },
  {
    type: 0, //Sphere
    name: "Right Sphere",
    pos: new THREE.Vector3(12, 0, 0),
    dims: new THREE.Vector3(5, 0, 0),
    dims2: new THREE.Vector3(0, 0, 0),
    mat: 9,
    exists: true,
  },
  {
    type: 0, //Sphere
    name: "Glowing Sphere",
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
    specProb: 0,
    specularColor: new THREE.Vector3(255, 255, 255),
  },
  { // Front wall
    color: new THREE.Vector3(252, 217, 220),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 0,
    specProb: 0,
    specularColor: new THREE.Vector3(255, 255, 255),
  },
  { // Left wall
    color: new THREE.Vector3(255, 0, 0),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 0,
    specProb: 0,
    specularColor: new THREE.Vector3(255, 255, 255),
  },
  { // Right wall
    color: new THREE.Vector3(0, 255, 0),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 0,
    specProb: 0,
    specularColor: new THREE.Vector3(255, 255, 255),
  },
  { // Bottom wall
    color: new THREE.Vector3(255, 255, 255),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 1,
    specProb: 0.1,
    specularColor: new THREE.Vector3(255, 255, 255),
  },
  { // Top wall
    color: new THREE.Vector3(46, 52, 57),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 0,
    specProb: 0,
    specularColor: new THREE.Vector3(255, 255, 255),
  },
  { // Lamp
    color: new THREE.Vector3(0, 0, 0),
    emissionColor: new THREE.Vector3(255, 255, 255),
    emissionStrength: 10,
    smoothness: 0,
    specProb: 0,
    specularColor: new THREE.Vector3(255, 255, 255),
  },
  { // Sphere 1
    color: new THREE.Vector3(200, 200, 200),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 1,
    specProb: 1,
    specularColor: new THREE.Vector3(255, 255, 255),
  },
  { // Sphere 1
    color: new THREE.Vector3(200, 200, 200),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 1,
    specProb: 0.5,
    specularColor: new THREE.Vector3(255, 255, 255),
  },
  { // Sphere 1
    color: new THREE.Vector3(200, 200, 200),
    emissionColor: new THREE.Vector3(0, 0, 0),
    emissionStrength: 0,
    smoothness: 1,
    specProb: 0.02,
    specularColor: new THREE.Vector3(255, 255, 255),
  },
  {
    color: new THREE.Vector3(0, 200, 200),
    emissionColor: new THREE.Vector3(0, 200, 200),
    emissionStrength: 10,
    smoothness: 0.5,
    specProb: 0.02,
    specularColor: new THREE.Vector3(255, 255, 255),
  },
];

// Create the materials
const raytracingMat = await new Material("raytracing", {
  time: { value: 0 },
  resolution: { value: new THREE.Vector2() },

  cameraPos: { value: new THREE.Vector3(0, 0, -55) },
  cameraRot: { value: new THREE.Vector2(0, 0) },

  fov: {value: 90.0},
  bounceLimit: {value: 7},
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


/*
  let fp = obs[0];
  let pos = rotateVector({x: 0, y: 0, z: uniforms.focusDist.value}, uniforms.cameraRot.value.y, uniforms.cameraRot.value.x, 0);
  fp.pos.x = uniforms.cameraPos.value.x + pos.x;
  fp.pos.y = uniforms.cameraPos.value.y + pos.y;
  fp.pos.z = uniforms.cameraPos.value.z + pos.z;
  fp.dims2.x = uniforms.cameraRot.value.x;
  fp.dims2.y = uniforms.cameraRot.value.y;*/



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
  let w = window.innerWidth / sizeDivisions;
  let h = window.innerHeight / sizeDivisions;

  uniforms.resolution.value.x = w;
  uniforms.resolution.value.y = h;

  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);

  rt1.setSize(w, h);
  rt2.setSize(w, h);

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
// Helper function to multiply two matrices
function matMultMat(a, b) {
  const result = [];
  for (let i = 0; i < 3; i++) {
    result[i] = [];
    for (let j = 0; j < 3; j++) {
      let sum = 0;
      for (let k = 0; k < 3; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}
//rotates a vector
function rotateVector(vector, pitch, yaw, roll) {
  const pitchRad = pitch * Math.PI / 180;
  const yawRad = yaw * Math.PI / 180;
  const rollRad = roll * Math.PI / 180;

  const pitchMat = [
    [1, 0, 0],
    [0, Math.cos(pitchRad), -Math.sin(pitchRad)],
    [0, Math.sin(pitchRad), Math.cos(pitchRad)]
  ];
  const yawMat = [
    [Math.cos(yawRad), 0, Math.sin(yawRad)],
    [0, 1, 0],
    [-Math.sin(yawRad), 0, Math.cos(yawRad)]
  ];
  const rollMat = [
    [Math.cos(rollRad), -Math.sin(rollRad), 0],
    [Math.sin(rollRad), Math.cos(rollRad), 0],
    [0, 0, 1]
  ];

  const rotationMat = matMultMat(rollMat, matMultMat(yawMat, pitchMat));
  const rotatedVector = matMultVec(rotationMat, vector);
  
  return rotatedVector;
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
let controlsElem = document.getElementsByClassName("controls")[0];

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
function createControlRange(name, value, min, max, step, clearScreen, callback = ()=>{}) {
  let shell = createControlShell(name, "range", true, value);

  shell.inputElem.value = value;
  shell.inputElem.min = min;
  shell.inputElem.max = max;
  shell.inputElem.step = step;

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
function createControlVector(name, value, min, max, step, clearScreen, callback = () => {}) {
  let shell = createControlShell(name, "vector", false);
  shell.inputHolderElem.replaceChildren();
  
  let dims = Object.keys(value).length;

  let submenu = createControlMenu(`Vec${dims}`, false);
  shell.inputHolderElem.appendChild(submenu[0]);
  shell.inputHolderElem.appendChild(submenu[1]);
  submenu = submenu[1];

  for (let i = 0; i < dims; i++) {
    let dim = ["x","y","z"][i];
    let range = createControlRange(dim, value[dim], min, max, step, clearScreen, (val)=>{
      value[dim] = parseFloat(val);
      callback(value);
    });
  

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
  let menu = createControlMenu(`${index}: ${ob.name} - ${type}`, false);
  elem.appendChild(menu[0]);
  elem.appendChild(menu[1]);
  menu = menu[1];

  let posElem = createControlVector("Pos", ob.pos, -50, 50, 1, true);
  menu.appendChild(posElem);

  if (type == "sphere") {

    let radiusElem = createControlRange("Radius", ob.dims.x, 0, 20, 0.1, true, (val) => {
      ob.dims.x = val;
    });
    menu.appendChild(radiusElem);

  } else if (type == "tri") {

    let posElem2 = createControlVector("Pos", ob.dims, -50, 50, 1, true);
    menu.appendChild(posElem2);
    let posElem3 = createControlVector("Pos", ob.dims2, -50, 50, 1, true);
    menu.appendChild(posElem3);

  } else if (type == "quad") {

    let dimsElem = createControlVector("Dimensions", new THREE.Vector2(ob.dims.x, ob.dims.y), -50, 50, 1, true, (val) => {
      ob.dims.x = val.x;
      ob.dims.y = val.y;
    });
    menu.appendChild(dimsElem);

    let rotElem = createControlVector("Rotation", ob.dims2, -180, 180, 1, true, (val) => {

    });
    menu.appendChild(rotElem);

  }

  let matElem = createControlRange("Material", ob.mat, 0, mats.length, 1, true, val => {
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

  let emStrengthElem = createControlRange("Emission Strength", mat.emissionStrength, 0, 10, 0.01, true, val => {
    mat.emissionStrength = val;
  });
  menu.appendChild(emStrengthElem);

  let smoothnessElem = createControlRange("Smoothness", mat.smoothness, 0, 1, 0.01, true, val => {
    mat.smoothness = val;
  });
  menu.appendChild(smoothnessElem);

  let specProbElem = createControlRange("Specular Prob.", mat.specProb, 0, 1, 0.01, true, val => {
    mat.specProb = val;
  });
  menu.appendChild(specProbElem);

  let specColorElem = createControlColor("Specular Color", mat.specularColor, true, val => {
    mat.specularColor = val;
  });
  menu.appendChild(specColorElem);

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


function createControls(controls, depth = 0) {
  let elems = [];

  for (let i = 0; i < controls.length; i++) {
    let control = controls[i];
    let elem;
    switch (control.type) {
      case "menu":
        elem = createControlMenu(control.name, control.open);
        elem[1].style.setProperty("--depth", depth + 1);

        let subControls = createControls(control.controls, depth + 1);
        for (let i in subControls) {
          let subControl = subControls[i];
          elem[1].appendChild(subControl);
        }

        elems.push(elem[0]);
        elems.push(elem[1]);
        break;

      case "range":
        elem = createControlRange(control.name, control.value, control.range[0], control.range[1], control.range[2], true, control.callback);
        elems.push(elem);
        break;

      case "vector":
        elem = createControlVector(control.name, control.value, control.range[0], control.range[1], control.range[2], true, control.callback);
        elems.push(elem);
        break;

      case "check":
        elem = createControlCheck(control.name, control.value, true, control.callback);
        elems.push(elem);
        break;

      case "color":
        elem = createControlColor(control.name, control.value, true, control.callback);
        elems.push(elem);
        break;

      case "object":
        elem = createControlObject(control.i);
        elems.push(elem);
        break;

      case "material":
        elem = createControlMat(control.i);
        elems.push(elem);
        break;
    }
  }

  if (depth == 0) {
    for (let i in elems) {
      let elem = elems[i];
      controlsElem.appendChild(elem);
    }
  } else {
    return elems;
  }
}

let controls = [
  {
    type: "menu",
    name: "controls",
    open: true,
    controls: [
      {
        type: "range",
        name: "Bounce Limit",
        value: uniforms.bounceLimit.value,
        range: [1, 20, 1],
        callback: val=>{uniforms.bounceLimit.value = val},
      },
      {
        type: "range",
        name: "Rays/Pixel/Frame",
        value: uniforms.raysPerPixel.value,
        range: [1, 100, 1],
        callback: val=>{uniforms.raysPerPixel.value = val},
      },
      {
        type: "range",
        name: "Size Divisions",
        value: sizeDivisions,
        range: [1, 10, 1],
        callback: val=>{sizeDivisions = val; resize()},
      },
      {
        type: "menu",
        name: "camera",
        open: true,
        controls: [
          {
            type: "vector",
            name: "Position",
            value: uniforms.cameraPos.value,
            range: [-100, 100, 1],
            callback: () => {},
          },
          {
            type: "vector",
            name: "Rotation",
            value: uniforms.cameraRot.value,
            range: [-180, 180, 1],
            callback: () => {},
          },
          {
            type: "range",
            name: "FOV",
            value: uniforms.fov.value,
            range: [10, 179, 1],
            callback: val=>{uniforms.fov.value = val;},
          },
          {
            type: "range",
            name: "Divergence",
            value: uniforms.divergeStrength.value,
            range: [0, 100, 1],
            callback: val=>{uniforms.divergeStrength.value = val;},
          },
          {
            type: "range",
            name: "Defocus",
            value: uniforms.defocusStrength.value,
            range: [0, 200, 1],
            callback: val=>{uniforms.defocusStrength.value = val;},
          },
          {
            type: "range",
            name: "Focus Plane",
            value: uniforms.focusDist.value,
            range: [1, 100, 1],
            callback: val=>{uniforms.focusDist.value = val;},
          },
        ],
      },
      {
        type: "menu",
        name: "skybox",
        open: false,
        controls: [
          {
            type: "check",
            name: "Has Sky",
            value: uniforms.hasSky.value,
            callback: val=>{uniforms.hasSky.value = val;},
          },
          {
            type: "color",
            name: "Color Horizon",
            value: uniforms.skyColorHorizon.value,
            callback: val=>{uniforms.skyColorHorizon.value = val;},
          },
          {
            type: "color",
            name: "Color Zenith",
            value: uniforms.skyColorZenith.value,
            callback: val=>{uniforms.skyColorZenith.value = val;},
          },
          {
            type: "color",
            name: "Color Ground",
            value: uniforms.groundColor.value,
            callback: val=>{uniforms.groundColor.value = val;},
          },
          {
            type: "vector",
            name: "Sun Direction",
            value: uniforms.sunLightDirection.value,
            range: [-5, 5, 0.01],
            callback: () => {},
          },
          {
            type: "range",
            name: "Sun Focus",
            value: uniforms.sunFocus.value,
            range: [0, 1000, 1],
            callback: val=>{uniforms.sunFocus.value = val;},
          },
          {
            type: "range",
            name: "Sun Intensity",
            value: uniforms.sunIntensity.value,
            range: [0, 100, 1],
            callback: val=>{uniforms.sunIntensity.value = val;},
          },
        ],
      },
      {
        type: "menu",
        name: "objects",
        open: false,
        controls: (function (){
          let controls = [];
          for (let i = 0; i < obs.length; i++) {
            controls.push({
              type: "object",
              i: i,
            });
          }
          return controls;
        })(),
      },
      {
        type: "menu",
        name: "materials",
        open: false,
        controls: (function (){
          let controls = [];
          for (let i = 0; i < mats.length; i++) {
            controls.push({
              type: "material",
              i: i,
            });
          }
          return controls;
        })(),
      },
    ],
  }
];
createControls(controls);
