import './App.css';
import {useState} from 'react';


function App() {
  let heading = '글목록';
  let [글제목, 글제목변경]= useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let[modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');



  return (
    <div className="App">
      <div className="nav">
        <h1>{heading}</h1>
      </div>

      <div className="content">
      <div>
        <button onClick={ ()=>{
            let 글제목소팅배열 = [...글제목];
            글제목변경(글제목소팅배열.sort());
          }}>
          가나다순정렬
          </button>

      </div>
        {
          글제목.map(function(a, i){
            return(
              <div className="list" key={i}>
                <h2 onClick={() =>{ setModal(!modal); setTitle(i) }}>{글제목[i]}</h2>
                <div>
                  <span onClick={ ()=>{
                    let  copy = [...따봉];
                    copy[i] = copy[i]+1;
                    따봉변경(copy)

                   } }>좋아요버튼</span> {따봉[i]}
                </div>
                <p>2월 17일 발행</p>
                <div>
                   <button onClick={() => {
                     let copy = [...글제목];
                     copy.splice(i,1);
                     글제목변경(copy);
                   }}>삭제</button>
                </div>
              </div>
            )
          })
        }
      </div>

      <div>
        <input onChange={ (e)=>{ 입력값변경(e.target.value)} }></input>
        <button onClick={ ()=> {
            let inputCopy = [...글제목];
            inputCopy.unshift(입력값);
            글제목변경(inputCopy);

            let loveCopy = [...따봉];
            loveCopy.unshift(0);
            따봉변경(loveCopy);

        } }>글발행</button>
      </div>




      {
        modal == true  ? <Modal title={title} 글제목작명={글제목} /> : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <>
      <div className="modal">
        <h4>{props.글제목작명[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        {/*
              <button onClick={ ()=>{
              let copy = [...props.글제목작명];
              copy[0] = '여자코트추천';
              props.글제목변경(copy);
            }
          } type='button'>제목을바꾸는버튼2
        </button>
      */}
    </div>
   </>

  )
}

export default App;
