import { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import prodata from "../data/proData"
import Newrelease from './Newrelease';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Clothing from './Clothing';
import Snkrs from './Snkrs';
import Goods from './Goods';
import Air from './Air';

export default function Shop() {
  const navigator = useNavigate();
  const data = useState(prodata);
  return (
    <>
      <Container>
        <Nav defaultActiveKey="/Newrelease" as="ul" className="shop_list">
          <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Shop')
            }}>New Release
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Shop/Men')
            }}>Men
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Shop/Women')
            }}>Women
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Shop/Kids')
            }}>Kids
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Shop/Clothing')
            }}>Clothing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Shop/Snkrs')
            }}>Snkrs
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Shop/Goods')
            }}>Goods
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Shop/Air')
            }}>Air Jordan Retro
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      <Routes>
        <Route path="/*" element={<Newrelease data={data} />} />
        <Route path='Men/*' element={<Men data={data} />} />
        <Route path='Women/*' element={<Women data={data} />} />
        <Route path='Kids/*' element={<Kids data={data} />} />
        <Route path='Clothing/*' element={<Clothing data={data} />} />
        <Route path='Snkrs/*' element={<Snkrs data={data} />} />
        <Route path='Goods/*' element={<Goods data={data} />} />
        <Route path='Air/*' element={<Air data={data} />} />
      </Routes>
    </>
  )
}