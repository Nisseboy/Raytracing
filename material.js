
class Material {
  constructor(shaderName, uniforms) {
    return new Promise(async (resolve) => {
      //Get the shaders
      this.vertexShader = await loadFile(`shaders/${shaderName}-vertex.glsl`);
      this.fragmentShader = await loadFile(`shaders/${shaderName}-fragment.glsl`);

      this.material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: this.vertexShader,
        fragmentShader: this.fragmentShader
      });

      resolve(this.material);
    });
  }
}


//Function for getting the shaders
function loadFile(filePath) {
  return new Promise((resolve) => {
      const loader = new THREE.FileLoader();

      loader.load(filePath, (data) => {
          resolve(data);
      });
  });
}