import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Readmore from "../component/Readmore"

const Title = styled.div`
  height: 1600px;
  font-size: 190px;
  font-weight: bold;
  color: white;
  margin-left: 30px;
`
const SubTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: white;
`
export default function Mission() {
  return(
    <>
      <Routes>
        <Route path="/" element={
          <>
            <div className="mission">
              <Title>
                <ul className="title_box">
                  <li className="title_01 title">BRING</li><br />
                  <li className="title_02 title">INSPIRATION</li><br />
                  <li className="title_03 title">AND</li><br />
                  <li className="title_04 title">INNOVATION</li><br />
                  <li className="title_05 title">TO</li><br />
                  <li className="title_06 title">EVERY</li><br />
                  <li className="title_07 title">ATHLETE*</li><br />
                  <li className="title_08 title">IN THE</li><br />
                  <li className="title_09 title">WORLD</li>
                </ul>
              </Title>
              <p className="ect_txt">*If you have a body, you are an athlete</p>
              <video src={process.env.PUBLIC_URL+"/images/about_main.mp4"} 
              autoPlay loop muted className="video"
              />
              <div className="text">
                <div>
                  We champion continual <br />
                  progress for athletes and <br />
                  sport by taking action to help <br />
                  athletes reach their potential.<br />
                  Every job at NIKE, Inc. is <br />
                  grounded in a team-first <br />
                  mindset, cultivating a culture <br />
                  of innovation and a shared <br />
                  purpose to leave an enduring <br />
                  impact.
                </div>
              </div>
            
              <div className="contents">
                <div className="subTitle_box">
                  <SubTitle>
                    Stories, volume 2: A <br />
                    Culture of Innovation 
                  </SubTitle>
                  <span style={{color: 'white', fontSize: '20px'}}>Explore the latest stories </span>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/home01.jpg"} alt="" />
              </div>

              <div className="contents">
                <img src={process.env.PUBLIC_URL + "/images/home02.jpg"} alt="" />
                <div className="subTitle_box">
                  <SubTitle>
                    Our Impact: Breaking<br />
                    Barriers Since 1972 
                  </SubTitle>
                  <span style={{color: 'white', fontSize: '20px'}}>Explore our Purpose </span>
                </div>
              </div>

              <div className="contents">
                <div className="subTitle_box">
                  <SubTitle>
                    NIKE, Inc: Keeping<br />
                    athletes at the center<br />
                    of everything we do.
                  </SubTitle>
                  <span style={{color: 'white', fontSize: '20px'}}>Learn more about NIKE, Inc. </span>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/home03.jpg"} alt="" />
              </div>
            </div>
            <Readmore />
          </>
        }>
        </Route>
      </Routes>
    </>
  )
}