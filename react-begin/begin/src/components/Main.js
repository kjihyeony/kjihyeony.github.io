import React from 'react';
import Button from './Button';


const Main = () => {
  return (
    <div>
      <h1>Phase1 Main</h1>
      <p>Pahse1 페이지</p>
      <div>
        <Button size="large">이거슨 버튼</Button>
        <Button color="gray">이거슨 버튼</Button>
        <Button size="small" color="pink">이거슨 버튼</Button>
        <Button color="pink" outline>이거슨 버튼</Button>
        <Button size="large" fullWidth color="gray">안녕</Button>
      </div>
    </div>
  );
};

export default Main;