import bg2 from '../img/bg2.avif';

function Detail(){
  return (
    <>
    <div className="container d-flex w-100 justify-content-center">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={bg2} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-primary">주문하기</button> 
        </div>
      </div>
    </div> 
    </>
  )
}

export default Detail;