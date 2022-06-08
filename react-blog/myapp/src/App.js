import './App.css';
import {useState} from 'react';


function App() {
  let title = '글목록';
  let [글제목, 글제목변경]= useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  function test(){
    console.log(1);
  }

  return (
    <div className="App">
      <div className="nav">
        <h1>{title}</h1>
      </div>
      <div className="content">
        <div className="list">
        <div>
          <button onClick={ ()=>{
            let copy = [...글제목];
            copy[0] = '여자코트추천';
            글제목변경(copy);
          } 
        } type='button'>제목을바꾸는버튼</button>
        </div>
          <h2>{글제목[0]} <span onClick={ ()=>{따봉변경(따봉 + 1)} }>좋아요</span> {따봉}</h2>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
        <h2>{글제목[1]}</h2>
          <p>2월 17일 발행</p>
        </div>  
        <div className="list">
        <h2>{글제목[2]}</h2>
          <p>2월 17일 발행</p>
        </div>
      </div>
    </div>
  );
}

export default App;
