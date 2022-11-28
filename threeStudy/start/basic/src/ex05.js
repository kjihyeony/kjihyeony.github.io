import * as THREE from 'three';

// --- 주제 : 애니메이션 성능 보정
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
  function draw(){
    // console.log(clock.getElapsedTime());
    const time = clock.getElapsedTime();


    //1초에 5번 실행 0 0.2 0.4 0.6 0.8 1 , 1초에 10번실행  0 0.1 0.2 0.3 .... 1초가 찍히는건 똑같음

    //draw함수는 1초에 60번 반복을 목표로실행이되니까 1초에 60도씩 돌아감
    //1도씩 돌리는 대신에 타임값 적용. time은 시간 그 자체기 때문에 = 을 사용
    //time을 곱함으로써 성능을 보정
    //예를들면 실행이 그만큼 늦게되는 애는 타임이 그만틈 늘어나있게됨. 드로우 함수가 실행되는 그 간격의 시간이 성능이 떨어질수록 실행간격이 길테니까 타임은 올라가있겠.
    //어디서열리든 속도는 같게됨

    // mesh.rotation.y +=0.1;
    // mesh.rotation.y += THREE.MathUtils.degToRad(1);
    mesh.rotation.y = 2 * time;
    mesh.position.x = time;
    if(mesh.position.y >0.02){
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