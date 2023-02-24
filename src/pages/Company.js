import { Accordion } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Readmore from "../component/Readmore";
import styles from '../css/About.module.css';

export default function Company() {
  return(
    <>
      <Routes>
        <Route path="/" element={
          <>
            <div className={styles.sheet}>
              <div className={styles.title_box}>
                <ul className={styles.title}>
                  <li>WELCOME TO</li>
                  <li>NIKE, INC.</li>
                </ul>
              </div>
              <video src={process.env.PUBLIC_URL+"/images/about_company.mp4"} 
                autoPlay loop muted className={styles.video} />
              <ul className={styles.txt}>
                <li>NIKE, Inc. is a team comprised of the Nike, Jordan and</li>
                <li>Converse brands driven by a shared purpose to leave an</li>
                <li>enduring impact.</li>
              </ul>         
            </div>
            <div className={styles.contents}>
              <p className={styles.contents_title}>Who We Are</p>
              <img src={process.env.PUBLIC_URL + "/images/logos.jpg"} alt="" />
              <div className={styles.txt_box}>
                <p>With a global footprint, culture of innovation and team-first mentality, we take action to create a future of</p>
                <p>continual progress for athletes, sport and our world.</p>
              </div>
            </div>
            <div className={styles.contents}>
              <p className={styles.contents_title}>At a Glance</p> 
              <div className={styles.glance}>
                <div>
                  <p>43%</p>
                  <p>of NIKE's leadership position are held by women.</p>
                </div>
                <div>
                  <p>78%</p>
                  <p>renewable energy in owned or operated facilities, up from 48% in FY20.</p>
                </div>
                <div>
                  <p>$97.7M</p>
                  <p>invested in NIKE, Inc.'s fiscal year 2021 to drive positive impact in communities around the world.</p>
                </div>
              </div>
            </div>
            <div className={styles.contents}>
              <p className={styles.contents_title}>Headquarters</p>
              <div className={styles.headquarters}>
                <div>
                  <img src={process.env.PUBLIC_URL+"/images/hqs01.jpg"} alt="" />
                  <ul>
                    <li>NIKE, Inc. World Headquarters</li>
                    <li>One Bowerman Drive</li>
                    <li>Beaverton, OR 97005</li>
                    <li>United States</li>
                    <li>+1 503 671 6453</li>
                  </ul>  
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL+"/images/hqs02.jpg"} alt="" />
                  <ul>
                    <li>NIKE, Inc. European Headquarters</li>
                    <li>Colosseum 1</li>
                    <li>1213 NL Hilversum</li>
                    <li>The Netherlands</li>
                    <li>+31 35 6266453</li>
                  </ul>  
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL+"/images/hqs03.jpg"} alt="" />
                  <ul>
                    <li>NIKE, Inc. Greater China Headquarters</li>
                    <li>No. 99, Jiangwancheng Road</li>
                    <li>Yangpu District</li>
                    <li>Shanghai 200438</li>
                    <li>+86 21 52882828</li>
                  </ul>  
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL+"/images/hqs04.jpg"} alt="" />
                  <ul>
                    <li>Converse World Headquarters</li>
                    <li>160 North Washington Street,</li>
                    <li>Boston, Massachusetts</li>
                    <li>United States</li>
                    <li>+1 432 1234 5678</li>
                  </ul>  
                </div>
              </div>
            </div>

            <div className={styles.contents}>
              <p className={styles.contents_title}>Contact Us</p>
              <Accordion className={styles.acc}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                   <h4>Headquarters</h4>
                    </Accordion.Header>
                  <Accordion.Body>
                    <span style={{fontWeight: "bold"}}>Nike World Headquarters</span><br/>
                    One Bowerman Drive<br/>
                    Beaverton, OR 97005<br/>
                    Phone: 1-503-671-6453<br/>
                    7:30 a.m. - 5:30 p.m. PT, Monday - Friday<br/> (except holidays).<br/>
                    <br/>
                    <span style={{fontWeight: "bold"}}>Nike European Headquarters</span><br/>
                    Colosseum 1<br/>
                    1213 NL Hilversum<br/>
                    The Netherlands<br/>
                    Phone: +31 35 6266453<br/>
                    <br/>
                    <span style={{fontWeight: "bold"}}>Nike Greater China Headquarters</span><br/>
                    No. 99, Jiangwancheng Road<br/>
                    Yangpu District<br/>
                    Shanghai 200438<br/>
                    Phone: +86-21-52882828<br/>
                    <br/>
                    Regional operations for the Americas, Asia-Pacific and United States are located at Nike's World Headquarters location.<br/>
                    <br/>
                    <span style={{fontWeight: "bold"}}>Other Countries</span><br/>
                    For specific country information, please see the following FAQ.<br />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                  <h4>Consumer Affairs</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span style={{fontWeight: "bold"}}>General Help</span><br />
                    Search the Help section to find what you need. <br />
                    <br />
                    <span style={{fontWeight: "bold"}}>United States</span><br />
                    For questions and assistance related to corporate matters (sponsorship/donations, idea/invention submissions, general <br />feedback for Nike) or for help with product you purchased from an authorized Nike retail partner, please contact us<br /> at 1-800-344-6453 (7 a.m. - 4 p.m. PT, Monday through Friday).<br />
                    <br />
                    <span style={{fontWeight: "bold"}}>Other Countries</span><br />
                    For specific country information, please see the following FAQ.<br />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h4>Student Inquiries</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    Thank you for your interest in Nike. Due to a high volume of student inquiries, we are unable to respond to individual<br /> requests for information. To help address questions about the company, we publish news stories on a daily basis and<br /> routinely update company material in our Newsroom and FAQ sections.<br />
                    <br />
                    For financial information please refer to the Financial Reports and SEC filings and quarterly earnings information<br /> available on the Investors site. Please note that due to the volume of requests and in effort to reduce our environmental<br /> impact, we are no longer sending printed copies of our NIKE, Inc. annual reports to students. Students interested in<br /> reading our annual report can find it online, along with other financial and company information, by visiting the Investors<br /> website.<br />
                    <br />
                    For information regarding our corporate responsibility efforts, visit the Impact section. Learn about Nike's giving and<br /> community programs in the Empowering Communities section. For questions regarding Nike's internship programs<br /> please visit the Internships page of the Careers section.<br />
                    <br />
                    To request a hard copy of our latest Annual report, please call 800-640-8007 or write to NIKE’s Investor Relations<br /> Department at Investor.Relations@nike.com. Annual reports prior to the current year are only available Online.<br />
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h4>Media Requests</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    For high-resolution, downloadable logos and images for media usage, please visit our Media Assets page.<br />
                    <br />
                    <span style={{fontWeight: "bold"}}>Nike Brand and NIKE, Inc.</span><br />
                    <span style={{fontWeight: "bold"}}>U.S. and global</span> 1-212-367-4447 or media.relations@nike.com<br />
                    <span style={{fontWeight: "bold"}}>U.K. and Europe</span> media.europe@nike.com<br />
                    <span style={{fontWeight: "bold"}}>Africa</span>  media.africa@nike.com<br />
                    These lines are answered during business hours and are also checked frequently for messages.<br />
                    <br />
                    <span style={{fontWeight: "bold"}}>Converse</span><br />
                    Communications@Converse.com<br />
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <h4>Investor Relations</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span style={{fontWeight: "bold"}}>NIKE, Inc. Investor Relations</span><br />
                    One Bowerman Drive - JM2<br />
                    Beaverton, OR 97005-6453<br />
                    Phone: 1-800-640-8007<br />
                    Email: Investor Relations<br />
                    <br />
                    <span style={{fontWeight: "bold"}}>Transfer Agent</span><br />
                    Computershare Trust Company, N.A.<br />
                    Providence, RI 02940-3069<br />
                    P.O. Box 43078<br />
                    Phone: 1-800-756-8200 and 1-781-575-2726<br />
                    Hearing Impaired # TDD: 1-800-952-9245<br />
                    Computershare.com/Investor<br />
                    <br />
                    <span style={{fontWeight: "bold"}}>Other Shareholder Assistance</span><br />
                    Communications concerning shareholder address changes, stock transfers, changes of ownership, lost stock<br /> certificates, payment of dividends, dividend check replacements, duplicate mailings or other account services should be<br /> directed to the Company's Registrar and Stock Transfer Agent at the address or telephone number above.<br />
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className={styles.contents}>
              <div className={styles.center}>
                <div>
                  <p>Discover the Lebron James</p>
                  <p>Innovation center</p>
                  <p>Visit the website</p>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/center.jpg"} alt="" />
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