import { useParams } from 'react-router-dom';
import bg2 from '../img/bg2.avif';
import styled from 'styled-components'

let Box = styled.div`
  border: 1px solid red;
`;

function Detail(props){
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });

  return (

    <Box className="container d-flex w-100 justify-content-center">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={bg2} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-primary">주문하기</button> 
        </div>
      </div>
    </Box> 
   
  )
}

export default Detail;