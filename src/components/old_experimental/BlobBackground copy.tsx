import { useEffect, useRef } from "react";
import * as THREE from "three";
import Perlin from '../BlobBackground/utils/perlin3d';

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

interface BlobBackgroundProps {
  children: JSX.Element
}



const BlobBakcground = ( props: BlobBackgroundProps ) : JSX.Element => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // UTILITY FUNCTIONS OF THE COMPONENT
    const createNewBlob = (radius: number, xStratingOffset:number, yStartingOffset: number, camera: THREE.PerspectiveCamera, color1Value: THREE.ColorRepresentation, color2Value: THREE.ColorRepresentation, objectArray: objectTemplate[]) => {
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
    
    // SHADER DEFINITIONS
    const vertexShader = `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `;

    const fragmentShader = `
    uniform vec3 color1;
    uniform vec3 color2;
  
    varying vec2 vUv;
    
    void main() {
      
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `;
    



    // SETTING THINGS UP AND DISPLAYING
    useEffect(() => {
        // Setting up camera and scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x7ab2ff)
        const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 20;
        scene.add(camera)

        // Create a new blob object and an object array
        // State quite possibly not needed, because everything is going to happen in this very component
        
        const objectArray: objectTemplate[] = []

        // createNewBlob(1, 200, 100, camera, "Deepskyblue", "Ivory", objectArray)
        // createNewBlob(0.8, 1400, 400, camera, "Red", "Ivory", objectArray)
        // createNewBlob(0.7, 700, 800, camera, "white", "Yellowgreen", objectArray)

        // createNewBlob(0.7, 200, 100, camera, "Deepskyblue", "Ivory", objectArray)
        // createNewBlob(0.8, 1400, 400, camera, "Red", "Ivory", objectArray)
        // createNewBlob(0.75, 700, 800, camera, "white", "Yellowgreen", objectArray)
        // createNewBlob(0.6, 1200, 800, camera, "Deepskyblue", "Ivory", objectArray)
        // createNewBlob(0.5, 1000, 100, camera, "Red", "Ivory", objectArray)
        // createNewBlob(0.92, 5500, 400, camera, "white", "Yellowgreen", objectArray)

        createNewBlob(1.5, 200, 200, camera, "Deepskyblue", "Ivory", objectArray)
        createNewBlob(2, 1400, 400, camera, 0x45c7ff, 0xd2e3fc, objectArray)
        createNewBlob(1.6, 700, 800, camera, "white", 0x3280ed, objectArray)

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

          return (() => window.removeEventListener('resize', windowResize))

    }, [])

    return ( 
        <>
        <div className=" flex items-center w-screen h-screen justify-center">
            <canvas className=" absolute left-0 top-0" ref={canvasRef}></canvas>
            { props.children }
        </div>
            
        </>
     );
}
 
export default BlobBakcground;