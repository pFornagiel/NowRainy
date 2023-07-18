import { useEffect, useMemo } from 'react';
import Perlin from '../utils/perlin3d';
import * as THREE from "three";
import * as TWEEN from '@tweenjs/tween.js'

// INTERFACES AND TYPES \\

type MeshObject =  THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial> 

interface objectTemplate {
  object: MeshObject,
  noise: Perlin,
}

// UTILITY BLOB FUNCTIONS  \\

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

    // POSITIONING RELATIVE TO SCREEN \\
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

    // Adding noise
    const noise = new Perlin(Math.random())

    // Adding to camera and pushing to array
    camera.add(object)
    objectArray.push({object: object, noise: noise})
  }

  // UPDATE FUCNTION \\
  const update = (meshObject: MeshObject, radius: number, spikes: number, agresivness : number, noise: Perlin) => {

    const positions = meshObject.geometry.attributes.position;
    const time = performance.now() * agresivness;
    const v3 = new THREE.Vector3();
    for(let i = 0; i< positions.count; i++){
        v3.fromBufferAttribute(positions, i).setLength(spikes);
        let n = noise.perlin3(v3.x + time * 0.1, v3.y + time * 0.1, v3.z + time * 0.1);
        v3.setLength(radius + 0.3 * n);
        positions.setXYZ(i, v3.x, v3.y, v3.z);
    }
    positions.needsUpdate = true;
    // meshObject.geometry.computeVertexNormals(); // not needed as it seems
    
    meshObject.rotation.x += 0.0001;
    meshObject.rotation.y += 0.0001;
    meshObject.position.z = -30;
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


// Setting up objectArray, camera and scene
// Has to be done here, not in useEffect, because I need to be able to access the scene in the updateColour function
const objectArray: objectTemplate[] = []

const scene = new THREE.Scene();
scene.background = new THREE.Color('hsl(215, 100%, 74%)');
const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 20;
scene.add(camera)

const useBlobBackground = (canvasRef: React.RefObject<HTMLCanvasElement>) => {

  useEffect(() => {
    createNewBlob(1.5, 200, 200, camera, "Deepskyblue", "white", objectArray, baseVertexShader, baseFragmentShader)
    createNewBlob(2, 1400, 400, camera, 0x45c7ff, 'white', objectArray, baseVertexShader, baseFragmentShader)
    createNewBlob(1.6, 700, 800, camera, 0x5527ff, 'white', objectArray, baseVertexShader, baseFragmentShader)
    
    // Set up renderer
    const renderer = new THREE.WebGL1Renderer({
        canvas: canvasRef.current ? canvasRef.current : undefined, 
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio);

    const render = () => {
        for(let object of objectArray){
          const meshSphere = object.object;
          // updatePosition( meshSphere )
          update(meshSphere, meshSphere.geometry.parameters.radius, 0.8, 0.002, object.noise);
        }
        
        TWEEN.update();
        renderer.render(scene,camera);
        requestAnimationFrame(render);
      }
      
      const windowResize = () => {
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setPixelRatio(window.devicePixelRatio);
        camera.updateMatrixWorld(); 
      }

      window.addEventListener('resize', windowResize)
      console.log(objectArray)
      requestAnimationFrame(render)
      return (() => window.removeEventListener('resize', windowResize))

  }, [])

}


// UPDATE BACKGROUND COLOURS \\
const udpateColours = (weatherCode: number, step:number) => {
  let backgroundColor = new THREE.Color('hsl(215, 100%, 74%)')
  for(let i=0;i<objectArray.length;i++){
    let colour: THREE.Color;
    switch(weatherCode){
      case 0: 
        colour = new THREE.Color(`hsl(${190 + step/2*i}, 100%, 50%)`)
        backgroundColor = new THREE.Color('hsl(215, 100%, 77%)')
        break;
      case 1: 
        colour = new THREE.Color(`hsl(${192 + step*i}, 100%, 55%)`)
        backgroundColor = new THREE.Color('hsl(215, 100%, 77%)')
        break;
      case 2: 
        colour = new THREE.Color(`hsl(${196 + step*i}, ${100-step*i}%, 70%)`)
        backgroundColor = new THREE.Color('hsl(217, 95%, 75%)')
        break;
      case 3: 
        colour = new THREE.Color(`hsl(${215 + step*i}, ${55 - step*i}%, 67%)`)
        backgroundColor = new THREE.Color('hsl(214, 50%, 70%)')
        break;
      case 4: 
        colour = new THREE.Color(`hsl(${210 + step/2*i}, ${40 - step*i}%, ${70-step/2*i}%)`)
        backgroundColor = new THREE.Color('hsl(214, 40%, 70%)')
        break;
      case 5: 
        colour = new THREE.Color(`hsl(${210 + step/2*i}, 85%, ${70 }%)`)
        backgroundColor = new THREE.Color('hsl(215, 80%, 75%)')
        break;
      case 6: 
        colour = new THREE.Color(`hsl(${210 + step/2*i}, 60%, 65%)`)
        backgroundColor = new THREE.Color('hsl(220, 50%, 70%)')
        break;
      case 7: 
        colour = new THREE.Color(`hsl(${180 + step*i}, 20%, 87%)`)
        backgroundColor = new THREE.Color('hsl(215, 20%, 85%)')
        break;
      case 8: 
        colour = new THREE.Color(`hsl(${210 + step/2*i}, 80%, 65%)`)
        backgroundColor = new THREE.Color('hsl(220, 80%, 70%)')
        break;
      case 9: 
        colour = new THREE.Color(`hsl(${220 + step*i}, 50%, ${38 -i*step/4}%)`)
        backgroundColor = new THREE.Color('hsl(220, 20%, 60%)')
        break;
      default:
        colour = new THREE.Color(`hsl(${185 + step*i}, 100%, 50%)`)
        backgroundColor = new THREE.Color('hsl(215, 100%, 77%)')
        break;
    }

    new TWEEN.Tween(objectArray[i].object.material.uniforms.color1)
    .to({value: colour}, 1000)
    .easing(TWEEN.Easing.Sinusoidal.InOut)
    .start()
  }

  new TWEEN.Tween(scene)
   .to({background: backgroundColor})
   .easing(TWEEN.Easing.Sinusoidal.InOut)
   .start()
}

export {useBlobBackground, udpateColours}
  