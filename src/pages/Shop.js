import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import prodata from "./proData"

export default function Shop() {
  const navigator = useNavigate();
  const data = useState(prodata);
  return (
    <>
      <Nav defaultActiveKey="/Newrelease" as="ul">
        <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Newrelease')
            }}>New Release
            </Nav.Link>
        </Nav.Item>
        <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Men')
            }}>Men
            </Nav.Link>
        </Nav.Item>
        <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Women')
            }}>Women
            </Nav.Link>
        </Nav.Item>
        <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Kids')
            }}>Kids
            </Nav.Link>
        </Nav.Item>
        <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Clothing')
            }}>Clothing
            </Nav.Link>
        </Nav.Item>
        <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Snkrs')
            }}>Snkrs
            </Nav.Link>
        </Nav.Item>
        <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Goods')
            }}>Goods
            </Nav.Link>
        </Nav.Item>
        <Nav.Item as ="li">
            <Nav.Link onClick={() => {
              navigator('/Air')
            }}>Air Jordan Retro
            </Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="Newrelease/*" element={<Newrelease data={data} />} />
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