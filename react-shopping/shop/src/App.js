import {useState} from 'react';
import {Button, Navbar, Container, Nav, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import bg1 from './img/bg1.avif';
import bg2 from './img/bg2.avif';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail'
import Event from './routes/Event'




function App() {

  let [shoes,슈즈변경] = useState(data)
  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}}>홈이동</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/detail')}} >Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div><button onClick={ ()=>{
        let copy = [...shoes];
          copy.sort( (a, b) => a.title < b.title ? - 1 :((a.title > b.title) ? 1 : 0 ) );
          슈즈변경(copy);
      } }>소팅버튼</button></div>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg" style={{backgroundImage : 'url('+bg1+')'}}> </div>
            <div className="row justify-content-center">
              {
                shoes.map((a, i)=>{
                  return(
                    <Items key={i} shoes={shoes[i]}/>
                  )
                })
              }
            </div>
          </>
         } />

          {/* about */}
          <Route path="/detail/:id" element={
            <Detail shoes={shoes}></Detail>
          } />

          {/* about */}
          <Route path="/about" element={<About /> } >
            <Route path="member" element={<div>멤버상세123</div> } />
          </Route>

          {/* event */}
          <Route path="/event" element={<Event /> } >
            <Route path="one" element={<div>첫주문시 어쩌고</div> } />
            <Route path="two" element={<div>두번째주문시 어쩌고</div> } />
          </Route>

          <Route path="*" element={<div> 404 </div> } />
        </Routes>
  </div>
  );
}

function Items(props){
  return (
    <Card className="col-md-3 m-2">
      <Card.Img variant="top" src={ bg2 } />
      <Card.Body>
        <Card.Title>{props.shoes.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

function About(){
  return(
    <div>
      <h4>어바웃정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
