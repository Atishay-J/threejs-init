import * as THREE from 'three';
import createCube from './createCube';
import createLine from './createLine';
import createScence from './createScene';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import babyHippo from './models/babyhippo.glb';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer();
const { camera, scene } = createScence();
const controls = new OrbitControls(camera, renderer.domElement);

// const cube = createCube();
// const line = createLine();

let hippo: THREE.Object3D<THREE.Event>;

loader.load(
  babyHippo,
  function (glb: { scene: THREE.Object3D<THREE.Event> }) {
    hippo = glb.scene;
    // hippo.position.y = 2;

    scene.add(hippo);
  },
  undefined,
  function (error: any) {
    console.error(error);
  }
);

// scene.add(cube);
// scene.add(line);
camera.position.z = 5;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Rendering the scene

function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  hippo.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
