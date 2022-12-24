import * as THREE from 'three';
const createScence = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  return { camera, scene };
};

export default createScence;
