import * as THREE from 'three';

// --- 주제 : 빛, 조명 설정
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


//camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.x = 3;
  camera.position.y = 3;
  camera.position.z = 10;
  scene.add(camera);

//light
const light = new THREE.DirectionalLight(0xfffff, 1.2);
light.position.x = 1;
light.position.y = 2;
scene.add(light);

  //Mesh
  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshStandardMaterial({
    color: 'gray'
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  //그리기
  function draw(){
    // 각도는 Radian을 사용
    // mesh.rotation.y +=0.1;
    mesh.rotation.y += THREE.MathUtils.degToRad(2);
    mesh.position.x +=0.01;
    if(mesh.position.y >0.02){
      mesh.position.x = 0;
    }
    renderer.render(scene, camera);
    

    // window.requestAnimationFrame(draw);
    renderer.setAnimationLoop(draw);
  }

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