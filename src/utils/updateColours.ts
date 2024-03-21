import * as TWEEN from '@tweenjs/tween.js'
import * as THREE from "three";
import { checkIfMobile } from './renderUtilities';
import { objectTemplate } from '../types/components/BlobBackground/IBlob';

// Mobile device check - THREE.js being too demanding for mobile devices 
const isMobile = checkIfMobile()


const updateColours = (objectArray: objectTemplate[], scene:THREE.Scene, weatherCode: number, step: number, canvasRef: React.RefObject<HTMLCanvasElement>) => {

  const normalUpdate = () => {
    let backgroundColor = new THREE.Color('hsl(215, 100%, 74%)')
    for (let i = 0; i < objectArray.length; i++) {
      let colour: THREE.Color;
      switch (weatherCode) {
        case 0:
          colour = new THREE.Color(`hsl(${190 + step / 2 * i}, 100%, 50%)`)
          backgroundColor = new THREE.Color('hsl(215, 100%, 77%)')
          break;
        case 1:
          colour = new THREE.Color(`hsl(${192 + step * i}, 100%, 55%)`)
          backgroundColor = new THREE.Color('hsl(215, 100%, 77%)')
          break;
        case 2:
          colour = new THREE.Color(`hsl(${196 + step * i}, ${100 - step * i}%, 70%)`)
          backgroundColor = new THREE.Color('hsl(217, 95%, 75%)')
          break;
        case 3:
          colour = new THREE.Color(`hsl(${215 + step * i}, ${55 - step * i}%, 67%)`)
          backgroundColor = new THREE.Color('hsl(214, 50%, 70%)')
          break;
        case 4:
          colour = new THREE.Color(`hsl(${210 + step / 2 * i}, ${40 - step * i}%, ${70 - step / 2 * i}%)`)
          backgroundColor = new THREE.Color('hsl(214, 40%, 70%)')
          break;
        case 5:
          colour = new THREE.Color(`hsl(${210 + step / 2 * i}, 85%, ${70}%)`)
          backgroundColor = new THREE.Color('hsl(215, 80%, 75%)')
          break;
        case 6:
          colour = new THREE.Color(`hsl(${210 + step / 2 * i}, 60%, 65%)`)
          backgroundColor = new THREE.Color('hsl(220, 50%, 70%)')
          break;
        case 7:
          colour = new THREE.Color(`hsl(${180 + step * i}, 20%, 87%)`)
          backgroundColor = new THREE.Color('hsl(215, 20%, 85%)')
          break;
        case 8:
          colour = new THREE.Color(`hsl(${210 + step / 2 * i}, 80%, 65%)`)
          backgroundColor = new THREE.Color('hsl(220, 80%, 70%)')
          break;
        case 9:
          colour = new THREE.Color(`hsl(${220 + step * i}, 50%, ${38 - i * step / 4}%)`)
          backgroundColor = new THREE.Color('hsl(220, 20%, 60%)')
          break;
        default:
          colour = new THREE.Color(`hsl(${185 + step * i}, 100%, 50%)`)
          backgroundColor = new THREE.Color('hsl(215, 100%, 77%)')
          break;
      }
      new TWEEN.Tween(objectArray[i].object.material.uniforms.color1)
        .to({ value: colour }, 1000)
        .easing(TWEEN.Easing.Sinusoidal.InOut)
        .start()
    }

    new TWEEN.Tween(scene)
      .to({ background: backgroundColor })
      .easing(TWEEN.Easing.Sinusoidal.InOut)
      .start()
  }

  const mobileUpdate = () => {
    if (!canvasRef.current) return
    let backgroundColor = 'hsl(215, 100%, 74%)'

    switch (weatherCode) {
      case 0:
        backgroundColor = 'hsl(215, 100%, 77%)'
        break;
      case 1:
        backgroundColor = 'hsl(215, 100%, 77%)'
        break;
      case 2:
        backgroundColor = 'hsl(217, 95%, 75%)'
        break;
      case 3:
        backgroundColor = 'hsl(214, 50%, 70%)'
        break;
      case 4:
        backgroundColor = 'hsl(214, 40%, 70%)'
        break;
      case 5:
        backgroundColor = 'hsl(215, 80%, 75%)'
        break;
      case 6:
        backgroundColor = 'hsl(220, 50%, 70%)'
        break;
      case 7:
        backgroundColor = 'hsl(215, 20%, 85%)'
        break;
      case 8:
        backgroundColor = 'hsl(220, 80%, 70%)'
        break;
      case 9:
        backgroundColor = 'hsl(220, 20%, 60%)'
        break;
      default:
        backgroundColor = 'hsl(215, 100%, 77%)'
        break;
    }

    canvasRef.current.style.backgroundColor = backgroundColor
  }

  // Disabling THREE.js rendering for mobile devices 
  if (isMobile) {
    mobileUpdate()
  } else {
    normalUpdate()
  }
}

export default updateColours