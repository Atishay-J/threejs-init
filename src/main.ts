import * as THREE from 'three';
import createCube from './createCube';
// import createLine from './createLine';
import createScence from './createScene';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import babyHippo from './models/babyhippo.glb';
import subnauticaCyclops from './models/SubnauticaCyclops.glb';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer();
const { camera, scene } = createScence();
new OrbitControls(camera, renderer.domElement);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
const pointLight = new THREE.PointLight(0xffffff, 5, 10, 20);
const fog = new THREE.Fog(0xdfe9f3, 0.0, 500.0);

renderer.setClearColor('#2bc7b2');
pointLight.position.y = 2;
pointLight.position.z = 2;

scene.add(ambientLight);
scene.add(directionalLight);
scene.fog = fog;
scene.add(pointLight);

const cube = createCube();
cube.scale.x = 8;
cube.scale.z = 5;
cube.scale.y = 0.2;
cube.position.y = -1.9;

// const line = createLine();

let hippo: THREE.Object3D<THREE.Event>;
let subnautica: THREE.Object3D<THREE.Event>;

loader.load(
  babyHippo,
  function (glb: { scene: THREE.Object3D<THREE.Event> }) {
    hippo = glb.scene;
    scene.add(hippo);
  },
  undefined,
  function (error: any) {
    console.error(error);
  }
);

loader.load(
  subnauticaCyclops,
  function (glb: { scene: THREE.Object3D<THREE.Event> }) {
    subnautica = glb.scene;
    subnautica.scale.set(0.7, 0.7, 0.7);
    subnautica.position.z = -20;
    subnautica.position.y = 5;
    subnautica.position.x = -40;
    scene.add(subnautica);
  },
  undefined,
  function (error: any) {
    console.error(error);
  }
);

scene.add(cube);
// scene.add(line);
camera.position.z = 5.2;
camera.position.y = 1.1;
camera.lookAt(0, 0.3, 0);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Rendering the scene
function animate() {
  requestAnimationFrame(animate);

  subnautica.position.x += 0.02;
  hippo.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
