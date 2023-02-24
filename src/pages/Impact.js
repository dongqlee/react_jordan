import { Route, Routes } from "react-router-dom";
import Readmore from "../component/Readmore";
import styles from '../css/About.module.css';

export default function Impact() {
  return(
    <>
      <Routes>
        <Route path="/" element={
          <>
            <div className={styles.sheet}>
              <div className={styles.title_box}>
                <ul className={styles.title}>
                  <li>TAKING</li>
                  <li>ACTION</li>
                </ul>
              </div>
              <video src={process.env.PUBLIC_URL+"/images/about_impact.mp4"} 
                autoPlay loop muted className={styles.video} />
              <ul className={styles.txt}>
                <li>Our Purpose is to move the world forward. We take action</li>
                <li>by building community, protecting our planet and</li>
                <li>increasing access to sport. Learn more about our progress</li>
                <li>in our FY21 Impact Report.</li>
              </ul>  
            </div>

            <div className={styles.contents}>
              <p className={styles.contents_title}>Impact Report</p>
              <div className={styles.report}>
                <img src={process.env.PUBLIC_URL+"/images/impactreport.jpg"} alt="" />
                <ul className={styles.contents_txt}>
                  <li>FY21 NIKE, INC. IMPACT</li>
                  <li>Report</li>
                  <li>Fore 20 years, we've shared our successes and challenges through</li>
                  <li>reporting. Read about our latest progress and where we're going</li>
                  <li>next in our FY21 Nike Impact Report.</li>
                </ul>
              </div>
            </div>  

            <div className={styles.contents}>
              <div className={styles.focus}>
                <p className={styles.contents_title}>Focus Areas</p>
                <ul className={styles.focus_txt}>
                  <li>Our priorities include promoting diversity, equity and inclusion for all; advancing a transparent and</li>
                  <li>responsible supply chain; innovating sustainable materials and methods of make that focus on our</li>
                  <li>environmental impact; building community by investing in organizations focused on economic</li>
                  <li>empowerment, and education and equality; and bringing today’s generation together through sport and an</li>
                  <li>active lifestyle so they can reach their full potential tomorrow.</li>
                </ul>
              </div>
            </div>

            <div className={styles.focus_contents}>
              <div>
                <img src={process.env.PUBLIC_URL+"/images/diversity.jpg"} alt="" />
                <p>Diversity, Equity & Inclusion</p>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL+"/images/responsible.jpg"} alt="" />
                <p>Responsible Sourcing</p>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL+"/images/empowering.jpg"} alt="" />
                <p>Empowering Communities</p>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL+"/images/protecting.jpg"} alt="" />
                <p>Protecting the Planet</p>
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