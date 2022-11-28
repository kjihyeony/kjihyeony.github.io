import * as THREE from 'three';

// --- 주제 : 애니메이션 성능 보정2
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

  //애니메이션이 경과된 시간을 가지고 있음.
  const clock = new THREE.Clock();

  //그리기
  console.log(Date.now());
  let oldTime = Date.now();

  function draw(){
    const newTime = Date.now();
    const deltaTime = newTime- oldTime;

    oldTime = newTime;
    // const delta = clock.getDelta();

    // mesh.rotation.y +=0.1;
    // mesh.rotation.y += THREE.MathUtils.degToRad(1);
    mesh.rotation.x += 0.1 * deltaTime;
    // mesh.position.x += delta;
    if(mesh.position.x >3){
      mesh.position.x = 0;
    }
    renderer.render(scene, camera);
    

    // window.requestAnimationFrame(draw);
    //ar,vr컨텐츠를 만들경우에는 setAnimationLoop를 사용해야함
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