import { Nav } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Company from './Company';
import Impact from './Impact';
import Mission from './Mission';
import Stories from './Stories';
import style from '../css/About.module.css';
export default function About() {
  const navigator = useNavigate();
  return(
    <>
      <Nav defaultActiveKey="/Mission" as="ul" className={style.about_list}>
        <Nav.Item as ="li">
          <Nav.Link onClick={() => {
            navigator('/About')
          }}>Mission
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as ="li">
          <Nav.Link onClick={() => {
            navigator('/About/Stories')
          }}>Stories
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as ="li">
          <Nav.Link onClick={() => {
            navigator('/About/Impact')
          }}>Impact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as ="li">
          <Nav.Link onClick={() => {
            navigator('/About/Company')
          }}>Company
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route path='/' element={<Mission />} />
        <Route path='Stories/' element={<Stories />} />
        <Route path='Impact/' element={<Impact />} />
        <Route path='Company/' element={<Company />} />
      </Routes>
    </>
  )
}