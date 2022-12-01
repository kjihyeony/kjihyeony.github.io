import * as THREE from 'three';
import { DoubleSide } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// ----- 주제: MeshLanmerMaterial, MeshPhongMaterial

export default function example() {
	// Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

	// Scene
	const scene = new THREE.Scene();

	// Camera
	const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	// camera.position.y = 1.5;
	camera.position.z = 4;
	scene.add(camera);

	// Light
	const ambientLight = new THREE.AmbientLight('yellow', 0.2);


	const directionalLight = new THREE.DirectionalLight('white', 1);
	directionalLight.position.x = 1;
	directionalLight.position.z = 2;
	scene.add(ambientLight);
	scene.add(directionalLight);

	// Controls
	const controls= new OrbitControls(camera, renderer.domElement);

	// Mesh

	const geometry = new THREE.SphereGeometry(1, 16, 16);
	const geometry2 = new THREE.BoxGeometry(1, 1, 1);
	//가장 성능이 좋은 MeshBasicMaerial. light가 없어도 보임
	// const material = new THREE.MeshBasicMaterial({
	// 	color: 'seagreen'
	// });

	//반사광없음
	const material1 = new THREE.MeshLambertMaterial({
		color: 'orange',
	});
	//반사광있음
	const material2 = new THREE.MeshPhongMaterial({
		color: 'seagreen',
		shininess: 1000,
		flatShading: true,
	});

	const material3 = new THREE.MeshStandardMaterial({
		color: 'yellow',
		roughness: 0,
		// side: THREE.BackSide,
		side: DoubleSide
	});
	const mesh1 = new THREE.Mesh(geometry, material1);
	const mesh2 = new THREE.Mesh(geometry, material2);
	const mesh3 = new THREE.Mesh(geometry, material3);
	const mesh4 = new THREE.Mesh(geometry2, material3);

	mesh1.position.x = -1.5;
	mesh1.position.y = -2.5;
	mesh2.position.x = 1.5;
	mesh3.position.x = 2.5;
	mesh3.position.y = 1.5;
	mesh4.position.x = -0.5;
	mesh4.position.y = 1.5;
	scene.add(mesh1, mesh2, mesh3, mesh4);

	// 그리기
	const clock = new THREE.Clock();

	function draw() {
		const delta = clock.getDelta();

		renderer.render(scene, camera);
		renderer.setAnimationLoop(draw);
	}

	function setSize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	}

	// 이벤트
	window.addEventListener('resize', setSize);

	draw();
}
