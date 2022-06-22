import { useParams } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import bg2 from '../img/bg2.avif';
import {useContext, useState} from 'react';
import styled from 'styled-components'
import React, { useEffect } from 'react';

import {Context1} from './../App'


function Detail(props){
  let {재고, shoes} =  useContext(Context1)

  let[alert2, setAlert] = useState(true);

  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });

  let[text, setText] = useState("");
  let[textValid, setTextVaild] = useState(false);
  let[탭, 탭변경] = useState(0);

  let [fade2, setFade2] = useState('')

  //mount, update시 실행
  //html렌더링 후 동작
  useEffect(()=>{
    let a = setTimeout(()=>{setAlert(false) }, 2000);

    if(isNaN(text) == true ){
      alert('그러지마')
    }


  },[text])

  useEffect(()=>{
    setFade2('end')
    return()=>{
      setFade2('');
    }
  },[])

  return (
    <div className={'container start ' + fade2}>
      {
        alert2 == true
        ?  <div className='alert alert-warning'>2초안에 박스삭제</div>
        : null
      }

        <div className="container w-100 justify-content-center">

          <div className="row align-items-center">
{재고}
            <div className="col-md-6">
              <img src={bg2} width="100%" />
            </div>
            <div className="col-md-6 text-center">
              <h4 className="pt-5">{찾은상품.title}</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-primary">주문하기</button>
              <div className='mt-5'>
                <input
                  type="text"
                  name="size"
                  placeholder='숫자만?'
                  onChange={ (e)=>{
                    setText(e.target.value);
                  } }
                  ></input>
              </div>
            </div>
          </div>
      </div>
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={ ()=>{탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  onClick={ ()=>{탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  onClick={ ()=>{탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent 탭={탭}/>
    </div>

  )
}

function TabContent({탭}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 100)
      return ()=>{
        setFade('')
      }
    }, [탭])

  return (
    <div className={'start ' + fade}>
      { [<div></div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>
  )
}

export default Detail;