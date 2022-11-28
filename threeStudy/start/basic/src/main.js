import * as THREE from 'three';
import { PerspectiveCamera } from 'three';

// console.log(THREE);
//동적으로캔버스 조합하기
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWhidth,window.innerHeight );
// document.body.appendChild(renderer.domElement);

const canvas= document.querySelector('#three-canvas');
// const renderer= new THREE.WebGLRenderer({ canvas: canvas });
const renderer = new THREE.WebGLRenderer({ 
  canvas,
  antialias: true 
});
renderer.setSize(window.innerWidth,window.innerHeight );

const scene = new THREE.Scene();

//Camera
// const camera = new THREE.PerspectiveCamera(
//   75, //시야각
//   window.innerWidth / window.innerHeight, //종횡비
//   0.1, // near
//   1000 // far
// );
// camera.position.x = 1;
// camera.position.y = 2;
// camera.position.z = 5;
// scene.add(camera);
//
const camera = new THREE.OrthographicCamera(
  -(window.innerWidth / window.innerHeight),
  window.innerWidth / window.innerHeight,
  1,
  -1,
  0.1,
  1000
);
camera.position.x = 1;
camera.position.y = 5;
camera.position.z = 10;
camera.lookAt(0,0,0);
camera.zoom = 0.1;
camera.updateProjectionMatrix();
scene.add(camera);

//Mesh
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({
  color: 'gray'
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//그리기
renderer.render(scene, camera);