import * as THREE from 'three';
import createCube from './createCube';
import createLine from './createLine';
import createScence from './createScene';

const { camera, scene } = createScence();
const cube = createCube();
const line = createLine();

scene.add(cube);
scene.add(line);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Rendering the scene

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
