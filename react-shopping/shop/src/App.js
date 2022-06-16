import {useState} from 'react';
import {Button, Navbar, Container, Nav, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import bg1 from './img/bg1.avif';
import bg2 from './img/bg2.avif';
import data from './data.js';
// import CardItem from './CardItem';


function App() {

  let [shoes] = useState(data)

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" style={{backgroundImage : 'url('+bg1+')'}}>

      </div>

      <div className="row justify-content-center">
      {/** 
          <Items shoes={shoes[0]} i={1}/>
          <Items shoes={shoes[1]} i={1}/>
          <Items shoes={shoes[2]} i={2}/>
      */}

        {
          shoes.map((a, i)=>{
            return(
              <Items shoes={shoes[i]} i={1+1}/>
            )
          })
        }
      </div>
  </div>
  );
}

function Items(props){
  return (
    <Card className="col-md-3 m-2">
      <Card.Img variant="top" src={ bg2} />
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
export default App;
