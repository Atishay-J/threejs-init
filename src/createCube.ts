import * as THREE from 'three';
const createCube = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 'blue' });
  const cube = new THREE.Mesh(geometry, material);

  return cube;
};

export default createCube;
