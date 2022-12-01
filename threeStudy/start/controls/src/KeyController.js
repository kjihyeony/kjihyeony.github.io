
//클래스의 인스턴스가 기본적으로 실행되는 constructor함수
export class KeyController {
  constructor(){
    //생성자
    this.keys = [];

    window.addEventListener('keydown',e=>{
      console.log('누름');
      this.keys[e.code] = true;
    })

    window.addEventListener('keyup', e => {
      delete this.keys[e.code];
      console.log('뗌');
    })


  }
}