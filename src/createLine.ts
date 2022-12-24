import * as THREE from 'three';

const createLine = () => {
  const material = new THREE.LineBasicMaterial({ color: 'white' });

  const points = [];

  points.push(new THREE.Vector3(0, 3, 0));
  points.push(new THREE.Vector3(3, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.Line(geometry, material);

  return line;
};

export default createLine;
