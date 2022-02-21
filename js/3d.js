const container = document.querySelector('#containes3D');
import * as THREE from '../three.js/build/three.module.js';
import { GLTFLoader  } from '../three.js/build/GLTFLoader.js';
import { OrbitControls } from '../three.js/build/OrbitControls.js';
let house, controls;


const renderer = new THREE.WebGLRenderer({antialias: true, alpha:true});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, container.clientWidth/container.clientHeight, 1, 600);
camera.position.set(2.7, 7.5, 0.5);
camera.lookAt(0, -0.3, 0);

controls = new OrbitControls( camera, renderer.domElement );
controls.listenToKeyEvents( window );
controls.enableDamping = true;
controls.dampingFactor = 0.05;

controls.screenSpacePanning = false;

controls.minDistance = 2;
controls.maxDistance = 8;

controls.maxPolarAngle = 360;

const scene = new THREE.Scene();

scene.background = new THREE.Color( 0x000000 );
const ambient = new THREE.AmbientLight(0x404040, 2);
scene.add(ambient);

const light = new THREE.DirectionalLight(0xffffff, 10);
light.position.set(10, 3, -135);
scene.add(light);


const loader = new GLTFLoader();
loader.load('./earth/scene.gltf', function (gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0];
    house.rotation.y = 5;
    renderer.render(scene, camera);
    animate();
});

function animate() {
    requestAnimationFrame(animate);
    house.rotation.z += 0.01;
    controls.update();
    renderer.render(scene, camera);
}
