import { useEffect, useMemo } from 'react';
import Perlin from '../utils/perlin3d';
import * as THREE from "three";
import * as TWEEN from '@tweenjs/tween.js'

// INTERFACES AND TYPES DECLARATION

type MeshObject =  THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial> 

interface objectTemplate {
  object: MeshObject,
  noise: Perlin,
  randomness: number,
  speed: speed
}

interface speed {
  x: number,
  y: number
}


// UTILITY BLOB FUNCTIONS 

const createNewBlob = (radius: number, xStratingOffset:number, yStartingOffset: number, camera: THREE.PerspectiveCamera, color1Value: THREE.ColorRepresentation, color2Value: THREE.ColorRepresentation, objectArray: objectTemplate[], vertexShader: string, fragmentShader: string) => {
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
        new THREE.SphereGeometry(radius,128,128),
        material
    )
    // POSITIONING RELATIVE TO SCREEN

    const pointer = new THREE.Vector2();
    pointer.x = ( xStratingOffset/ window.innerWidth ) * 2 - 1;
    pointer.y = - ( yStartingOffset / window.innerHeight ) * 2 + 1;
    
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane();
    const planeNormal = new THREE.Vector3();
    const point = new THREE.Vector3();

    planeNormal.copy(camera.position).normalize();
    plane.setFromNormalAndCoplanarPoint(planeNormal, new THREE.Vector3(0,0,-30));
    raycaster.setFromCamera(pointer, camera);
    raycaster.ray.intersectPlane(plane, point);

    // Setting the actual position
    object.position.copy(point)
    object.position.z = -30

    const noise = new Perlin(Math.random())
    const randomness = Math.random() * 10 + 1

    camera.add(object)
    objectArray.push({object: object, noise: noise, randomness: randomness, speed: {x: (0.000001 + (Math.random() * 0.000005)) * Math.round(Math.random()) * -1, y: (0.000001 + (Math.random() * 0.000005)) * Math.round(Math.random()) * -1}})
  }

  const update = (geometry: THREE.BufferGeometry, radius: number, spikes: number, agresivness : number, noise: Perlin) => {
    const positions = geometry.attributes.position;
    const time = performance.now() * agresivness;
    const v3 = new THREE.Vector3();
    for(let i = 0; i< positions.count; i++){
        v3.fromBufferAttribute(positions, i).setLength(spikes);
        let n = noise.perlin3(v3.x + time * 0.1, v3.y + time * 0.1, v3.z + time * 0.1);
        v3.setLength(radius + 0.3 * n);
        positions.setXYZ(i, v3.x, v3.y, v3.z);

    positions.needsUpdate = true;
    // geometry.computeVertexNormals(); // causes problems
    }
}

// BASE SHADER DEFINITIONS

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

// Create a new blob object and an object array
// State quite possibly not needed WRONG!@#!@!

const objectArray: objectTemplate[] = []

const useBlobBackground = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  
  // SETTING THINGS UP AND DISPLAYING

  
  useEffect(() => {

    // Setting up camera and scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('hsl(215, 100%, 74%)');
    const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 20;
    scene.add(camera)


    createNewBlob(1.5, 200, 200, camera, "Deepskyblue", "Ivory", objectArray, baseVertexShader, baseFragmentShader)
    createNewBlob(2, 1400, 400, camera, 0x45c7ff, 0xd2e3fc, objectArray, baseVertexShader, baseFragmentShader)
    createNewBlob(1.6, 700, 800, camera, 0x5527ff, 'white', objectArray, baseVertexShader, baseFragmentShader)

    // console.log(objectArray[0].object.material.uniforms.color1.value = new THREE.Color('red'))
    
    // Set up renderer
    const renderer = new THREE.WebGL1Renderer({
        canvas: canvasRef.current ? canvasRef.current : undefined, 
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio);

    const updatePosition = (speed: speed, meshObject: MeshObject, randomness : number) => {
      meshObject.rotation.x += 0.0001;
      meshObject.rotation.y += 0.0001;
      meshObject.position.z = -30;
      // meshObject.translateX(speed.x)
      // meshObject.translateY(-speed.y)
      // speed.x += meshObject.position.x * 0.0000005 * -1 +( Math.random() * 0.000001 + 0.000001 ) * (Math.round(Math.random())* -1) * 0.01 * Math.abs(meshObject.position.x) 
      // speed.y += meshObject.position.y * 0.000005  +( Math.random() * 0.00001 + 0.0001 ) * (Math.round(Math.random())* -1) * 0.01 * Math.abs(meshObject.position.y) * randomness
    }

    const render = () => {
        for(let object of objectArray){
          const meshSphere = object.object;
          updatePosition(object.speed, meshSphere, object.randomness)
          update(meshSphere.geometry, meshSphere.geometry.parameters.radius, 0.8, 0.002, object.noise);
        }
        
        TWEEN.update();
        renderer.render(scene,camera);
        requestAnimationFrame(render);
      }
      
      requestAnimationFrame(render)
      
      const windowResize = () => {
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setPixelRatio(window.devicePixelRatio);
        camera.updateMatrixWorld(); 
      }

      window.addEventListener('resize', windowResize)
      console.log(objectArray)

      return (() => window.removeEventListener('resize', windowResize))

  }, [])

}

const udpateColours = (weatherCode: number, step:number) => {
  for(let i=0;i<objectArray.length;i++){
    let colour: THREE.Color;
    // let backgroundColor: THREE.Color;
    switch(weatherCode){
      case 0: 
        colour = new THREE.Color(`hsl(${195 + step/2*i}, 100%, 60%)`)
        break;
      case 1: 
        colour = new THREE.Color(`hsl(${195 + step*i}, 100%, 50%)`)
        break;
      case 2: 
        colour = new THREE.Color(`hsl(${203 + step*i}, ${70-step*i}%, 61%)`)
        break;
      case 3: 
        colour = new THREE.Color(`hsl(${215 + step*i}, ${45 - step*i}%, 67%)`)
        break;
      case 4: 
        colour = new THREE.Color(`hsl(${180 + step/2*i}, ${52 - step*i}%, ${80-step/2*i}%)`)
        break;
      case 5: 
        colour = new THREE.Color(`hsl(${200 + step*i}, 100%, ${55 - step*i}%)`)
        break;
      case 6: 
        colour = new THREE.Color(`hsl(${185 + step*i}, 100%, 50%)`)
        break;
      case 7: 
        colour = new THREE.Color(`hsl(${200 - step*i}, 100%, 93%)`)
        break;
      case 8: 
        colour = new THREE.Color(`hsl(${238 - step*i}, 100%, ${70 - step*i}%)`)
        break;
      case 9: 
        colour = new THREE.Color(`hsl(${258 - step*i}, 40%, ${48 - step*i}%)`)
        break;
      default:
        colour = new THREE.Color(`hsl(${185 + step*i}, 100%, 50%)`)
        break;
    }

    new TWEEN.Tween(objectArray[i].object.material.uniforms.color1)
    .to({value: colour}, 1000)
    .easing(TWEEN.Easing.Sinusoidal.InOut)
    .start()
  }
}

export {useBlobBackground, udpateColours}
  