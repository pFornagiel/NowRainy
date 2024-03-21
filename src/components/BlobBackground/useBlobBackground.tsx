import { useEffect } from 'react';
import * as THREE from "three";
import { createFirstBlob,createSecondBlob,createThirdBlob,render,windowResize, objectArray, camera, checkIfMobile } from '@/utils/renderUtilities';

const isMobile = checkIfMobile()

const useBlobBackground = (canvasRef: React.RefObject<HTMLCanvasElement>) => {

  // Do not use THREE.js functionality, if user happens to be using a mobile device
  // Causes preformance issues
  if (isMobile) return

  useEffect(() => {
    // Creating blobs in accordance to screen size
    createFirstBlob(window.innerWidth / 6, window.innerHeight / 5)
    if (window.innerWidth < 800) {
      createThirdBlob(window.innerWidth - 100, window.innerHeight - window.innerHeight / 10)
    }
    if (window.innerWidth >= 800 && window.innerWidth < 1100) {
      createSecondBlob(window.innerWidth, window.innerHeight / 3)
      createThirdBlob(window.innerWidth / 2, window.innerHeight - window.innerHeight / 10)
    }
    if (window.innerWidth >= 1100 && window.innerWidth < 1550) {
      createSecondBlob(window.innerWidth - 150, window.innerHeight / 3)
      createThirdBlob(window.innerWidth / 2 - 150, window.innerHeight - window.innerHeight / 10)

    }
    if (window.innerWidth >= 1550) {
      createSecondBlob(window.innerWidth - 280, window.innerHeight / 3)
      createThirdBlob(window.innerWidth / 2 - 150, window.innerHeight - window.innerHeight / 10)
    }

    // Set up renderer
    const renderer = new THREE.WebGL1Renderer({
      canvas: canvasRef.current ? canvasRef.current : undefined,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio);

    window.addEventListener('resize', () => windowResize(camera,renderer))
    requestAnimationFrame(() => render(objectArray,renderer))
    return (() => window.removeEventListener('resize', () => windowResize(camera,renderer)))

  }, [])

}

export default useBlobBackground
