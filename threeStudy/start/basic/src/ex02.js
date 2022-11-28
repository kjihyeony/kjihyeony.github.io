import * as THREE from 'three';

// --- 주제 : 브라우저 창 사이즈 변경에 대응하기
export default function example(){


const canvas= document.querySelector('#three-canvas');
// const renderer= new THREE.WebGLRenderer({ canvas: canvas });
const renderer = new THREE.WebGLRenderer({ 
  canvas,
  antialias: true 
});
renderer.setSize(window.innerWidth,window.innerHeight );
console.log(window.devicePixelRatio);
//대부분 2배정도면 웬~만하면 잘 나오기때문에 삼항연산자로 1보다 크다면 2로해주시고 아니면 1로 해달라 처리.
//성능면에서 유리
renderer.setPixelRatio(window.devicePixelRatio > 1 ?  2 : 1);

const scene = new THREE.Scene();
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

  //화면 비율이 변한다는건 종횡비가 변경된다는 뜻
  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }
  //이벤트
  window.addEventListener('resize', setSize);
}