import './App.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from "styled-components"; 
import maindata from './pages/Maindata';
import flightdata from './pages/Flightdata';
import { useState } from 'react';

const Textbox = styled.div`
  widows: 100%;
  text-align: center;
  font-weight: bold;
  margin: 20px 0;
`
const Title = styled.div`
  width: 100%; 
  text-align: center;
  font-size: 32px;
  margin: 20px 0;
`
const Button = styled.button`
  width: 120px; height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 20px;
  background-color: black;
  font-weight: bold;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`
function App() {
  const navigate = useNavigate()
  const [mains] = useState(maindata)
  const [flights] = useState(flightdata)
  return (
    <div className="App">
      <Navbar bg="white" variant="white">
        <Container>
          <Navbar.Brand>
            <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt='' style={{width: '80px'}}/>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/NewRelease')}} className='nav'>New Release</Nav.Link>
            <Nav.Link onClick={() => {navigate('/Men')}} className='nav'>Men</Nav.Link>
            <Nav.Link onClick={() => {navigate('/Women')}} className='nav'>Women</Nav.Link>
            <Nav.Link onClick={() => {navigate('/Kids')}} className='nav'>Kids</Nav.Link>
            <Nav.Link onClick={() => {navigate('/Clothing')}} className='nav'>Clothing</Nav.Link>
            <Nav.Link onClick={() => {navigate('/Snkrs')}} className='nav'>Snkrs</Nav.Link>
            <Nav.Link onClick={() => {navigate('/Goods')}} className='nav'>Goods</Nav.Link>
            <Nav.Link onClick={() => {navigate('/Air')}} className='nav'>Air Jordan Retro</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <Container>
            {
              mains.map((main, i) => {
                return (
                  <>
                    <Link to=''>
                      <img src={main.image} alt='' style={{width: '100%'}} />
                    </Link>
                    <Textbox>
                      <p className='slogan' style={{fontSize: 14}}>{main.slogan}</p>
                      <Title>{main.title}</Title>
                      <ul className='desc_box' style={{fontSize: 14}}>
                        <li>{main.desc01}</li>
                        <li>{main.desc02}</li>
                        <li>{main.desc03}</li>
                      </ul>
                    
                      <Button>구매하기</Button>
                    </Textbox>
                  </>
                )
              })
              
            }
          </Container>
          
        }>
        </Route>
      </Routes>
      <Routes>
        <Route path='/' element={
          <Container>
            <p className='flight_title'>NOW IN FLIGHT</p>
            <div className='btn_box'>
              <span className='btn_l'><i class="fa-solid fa-chevron-left"></i></span>
              <span className='btn_r'><i class="fa-solid fa-chevron-right"></i></span>
            </div>
            <section className='flight_box'>
              <div className='flight_slide'>
                {
                  flights.map((flight, j) => {
                    return(
                      <div className='pro'>
                        <Link>
                          <img src={flight.image} alt='' style={{width: '100%'}}/>
                          <ul className='txt_box'>
                            <li className='title'>{flight.title}</li>
                            <li>
                              {flight.discount}
                            </li>
                            <li className='price'>{flight.price.toLocaleString()}원</li>
                            <li className='pro_desc'>{flight.desc}</li>
                          </ul>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
            </section>
          </Container>
          }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
