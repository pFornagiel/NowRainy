import Perlin from "../types/utils/perlin3d";
import * as THREE from "three";
import * as TWEEN from '@tweenjs/tween.js'
import { MeshObject, objectTemplate } from "../types/components/BlobBackground/IBlob";

const createNewBlob = (radius: number, xStratingOffset: number, yStartingOffset: number, camera: THREE.PerspectiveCamera, color1Value: THREE.ColorRepresentation, color2Value: THREE.ColorRepresentation, objectArray: objectTemplate[], vertexShader: string, fragmentShader: string) => {
  const material = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color(color1Value)
      },
      color2: {
        value: new THREE.Color(color2Value)
      }
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
  })
  const object = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 128, 128),
    material
  )

  // Positioning relative to the screen \\
  const pointer = new THREE.Vector2();
  pointer.x = (xStratingOffset / window.innerWidth) * 2 - 1;
  pointer.y = - (yStartingOffset / window.innerHeight) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane();
  const planeNormal = new THREE.Vector3();
  const point = new THREE.Vector3();

  planeNormal.copy(camera.position).normalize();
  plane.setFromNormalAndCoplanarPoint(planeNormal, new THREE.Vector3(0, 0, -30));
  raycaster.setFromCamera(pointer, camera);
  raycaster.ray.intersectPlane(plane, point);

  // Setting the actual position
  object.position.copy(point)
  object.position.z = -30

  // Adding noise
  const noise = new Perlin(Math.random())

  // Adding to camera and pushing to the array
  camera.add(object)
  objectArray.push({ object: object, noise: noise })
}

const update = (meshObject: MeshObject, radius: number, spikes: number, agresivness: number, noise: Perlin) => {
  const positions = meshObject.geometry.attributes.position;
  const time = performance.now() * agresivness;
  const v3 = new THREE.Vector3();
  for (let i = 0; i < positions.count; i++) {
    v3.fromBufferAttribute(positions, i).setLength(spikes);
    let n = noise.perlin3(v3.x + time * 0.1, v3.y + time * 0.1, v3.z + time * 0.1);
    v3.setLength(radius + 0.3 * n);
    positions.setXYZ(i, v3.x, v3.y, v3.z);
  }
  positions.needsUpdate = true;

  meshObject.rotation.x += 0.0001;
  meshObject.rotation.y += 0.0001;
  meshObject.position.z = -30;
}

const render = (objectArray: objectTemplate[], renderer: THREE.WebGL1Renderer) => {
  for (let object of objectArray) {
    const meshSphere = object.object;
    update(meshSphere, meshSphere.geometry.parameters.radius, 0.8, 0.002, object.noise);
  }

  TWEEN.update();
  renderer.render(scene, camera);
  requestAnimationFrame(() => render(objectArray,renderer));
}

const windowResize = (camera: THREE.PerspectiveCamera, renderer: THREE.WebGL1Renderer) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  camera.updateMatrixWorld();
}

// Utility functions to create blob objects
const createFirstBlob = (width: number, height: number): void => {
  createNewBlob(1.5, width, height, camera, "Deepskyblue", "white", objectArray, baseVertexShader, baseFragmentShader)
}

const createSecondBlob = (width: number, height: number): void => {
  createNewBlob(2, width, height, camera, 0x45c7ff, 'white', objectArray, baseVertexShader, baseFragmentShader)
}

const createThirdBlob = (width: number, height: number): void => {
  createNewBlob(1.6, width, height, camera, 0x5527ff, 'white', objectArray, baseVertexShader, baseFragmentShader)
}

// Setting up objectArray, camera and scene
const objectArray: objectTemplate[] = []

const scene = new THREE.Scene();
scene.background = new THREE.Color('hsl(215, 100%, 74%)');

const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 20;

scene.add(camera)

// Shader definitions 
const baseVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`;

const baseFragmentShader = `
  uniform vec3 color1;
  uniform vec3 color2;

  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
  }
`;

const checkIfMobile = () => (/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

export {createNewBlob, createFirstBlob,createSecondBlob,createThirdBlob,update,windowResize,render, checkIfMobile, objectArray, scene, camera }