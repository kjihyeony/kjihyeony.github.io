import * as THREE from 'three';
import gsap from 'gsap';

// --- 주제 : 라이브러리를 이용한 애니메이션
export default function example(){


const canvas= document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth,window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio > 1 ?  2 : 1);
renderer.setClearColor(0x00ff00);
renderer.setClearAlpha(0.2);

//Scene
const scene = new THREE.Scene();
scene.fog = new THREE.Fog('#0x00ff00', 1, 7);


//camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // camera.position.x = 3;
  camera.position.y = 1;
  camera.position.z = 5;
  scene.add(camera);

//light
const light = new THREE.DirectionalLight(0xfffff, 1.2);
light.position.x = 1;
light.position.y = 3;
light.position.z = 5;
scene.add(light);

  //Mesh
  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshStandardMaterial({
    color: 'gray'
  });


  //라이브러리를 사용하면 생산성이 좋아짐.
  const meshes = [];
  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);
  meshes.push(mesh);

  //애니메이션이 경과된 시간을 가지고 있음.
  const clock = new THREE.Clock();

  //그리기
  let time = Date.now();

  function draw(){
    const newTime = Date.now();
    const deltaTime = newTime - time;
    time = newTime;

    renderer.render(scene, camera);
    renderer.setAnimationLoop(draw);
  }

  //gsap 
  gsap.to(
    mesh.position,
    {
      duration: 1,
      y: 2,
      x: -1,
      z: 4
    }
  )

  //화면 비율이 변한다는건 종횡비가 변경된다는 뜻
  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }
  //이벤트
  window.addEventListener('resize', setSize);

  draw();
}