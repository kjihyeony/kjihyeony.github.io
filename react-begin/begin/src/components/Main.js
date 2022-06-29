import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './Button';
import Card from './Card';
import Dialog from './Dialog';
import Media from './Media';
import CardSlider from './CardSlider'



const Compo = styled.div`
  padding: 10px;
  border: 1px solid ${props => props.color || 'black'};
  ${props =>
    props.huge &&
    css`
      color: blue
    `
  }
`;

const Box = styled.div`
  margin: 40px 0;
`;

const StyleCardWrap = styled.div `
    display: block;

    ${Media.tab`
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 0 20px;
    `}
`;


const Main = () => {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
    console.log('클릭');
  };
  const onConfirm = ()=> {
    console.log('확인');
    setDialog(false);
  };
  const onCancle = () => {
    console.log('취소');
    setDialog(false);
  };

  return (
    <div>
      <h1>Phase1 Main</h1>
      <p>Pahse1 페이지</p>
      <Compo color="red">
        <Button size="large">이거슨 버튼</Button>
        <Button color="gray">이거슨 버튼</Button>
        <Button size="small" color="pink">이거슨 버튼</Button>
        <Button color="pink" outline>이거슨</Button>
      </Compo>

      <Box>
      <button onClick={onClick}>Show name</button> 

        <Button size="large" fullWidth color="gray" onClick={onClick}>안녕 누르면 팝업</Button>
        <ThemeProvider
          theme={{
            palette: {
              blue: '#228be6',
              gray: '#495057',
              pink: '#f06595'
            }
          }}
        >
  
          <StyleCardWrap>
            <Card />
            <Card color="pink"  />
            <Card />
          </StyleCardWrap>
          <Dialog
              title="정말로 삭제하시겠습니까?"
              confirmText="삭제"
              cancelText="취소"
              onConfirm={onConfirm}
              onCancle={onCancle}
              visible={dialog}
            >
            데이터를 정말로 삭제하시겠습니까?
          </Dialog>
        </ThemeProvider>
      </Box>

      <div>
          <CardSlider />
      </div>

    </div>
  );
  
};

export default Main;