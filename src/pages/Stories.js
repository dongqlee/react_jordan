import { Route, Routes } from "react-router-dom";
import Readmore from "../component/Readmore";
import Accordion from 'react-bootstrap/Accordion';
import styles from '../css/About.module.css';
import { Carousel } from "react-bootstrap";

export default function Stories() {
  return(
    <>
      <Routes>
        <Route path="/" element={
          <>
            <div className={styles.sheet}>
              <div className={styles.title_box}>
                <ul className={styles.title}>
                  <li>A CULTURE OF</li>
                  <li>INNOVATION</li>
                </ul>
              </div>
              <video src={process.env.PUBLIC_URL+"/images/about_stories.mp4"} 
                autoPlay loop muted className={styles.video} />
              <ul className={styles.txt}>
                <li>We’ve spent 50 years shifting big ideas into scaled,</li>
                <li>sustainable platforms that have changed our</li>
                <li>products and manufacturing process, fueled our</li>
                <li>design ethos, and championed our athlete</li>
                <li>community.</li>
              </ul>
            </div>

            <div className={styles.contents}>
              <p className={styles.contents_title}>Behind the Scenes</p>
              <div className={styles.scene}>
                <video src={process.env.PUBLIC_URL +"/images/behind_the_scenes.mp4#t=0.51"} 
                controls played  preload="metadata" className={styles.scenes} />
                <ul className={styles.contents_txt}>
                  <li>How We Totally</li> 
                  <li>Reimagined the Hoodie</li>
                  <li>Introducing Nike Forward, our most significant apparel innovation</li>
                  <li>since Dri-FIT. The platform revolutionizes apparel creation by</li>
                  <li>hacking punch-needle machines for the purpose of making</li>
                  <li>premium sustainability-minded product. Can’t picture this? We’ll</li>
                  <li>talk you through it.</li>
                </ul>
              </div>
            </div>

            <div className={styles.contents}>
              <p className={styles.contents_title}>Visual History</p>
              <div className={styles.visaul}>
                <ul className={styles.contents_txt}>
                  <li>5 Decades of Innovation in</li>
                  <li>Women’s Apparel</li>
                  <li>From the first built-in sports bra to football kits designed specifically for</li>
                  <li>women, Nike has a powerful track record of breaking conventions and</li>
                  <li>setting new standards in apparel.</li>
                </ul>

                <div className={styles.visaul_main}>
                  <Carousel fade variant="dark">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL +"/images/support.jpg"}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h4>2006: REVOLUTIONARY SUPPORT BRA</h4>
                        <p>An example of Nike seeking to redefine support bras as a critical piece of equipment for women, this bra was test-worn by Olympic athletes. It was seamless and made of moisture-wicking Dri-FIT, and it offered customizable support features with an adjustable motion-control strap — all without the use of compression.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL +"/images/courset.jpg"}
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <h4>2006: NIKE SPEED CORSET</h4>
                        <p>Nike’s first apparel designer, Diane Katz, created the now iconic Windrunner during the 1970s running boom. Rejecting the norm of restrictive training gear, Nike designed a lightweight, weather-resistant single-layer nylon jacket with raglan sleeves to protect from the elements while allowing for movement. The look was memorable too, with bold colorways for visibility and a 26-degree chevron design.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL +"/images/windrunner.jpg"}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h4>1979: WINDRUNNER</h4>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
            <div className={styles.contents}>
              <p className={styles.contents_title}>More Ways We Champion Athletes</p>
              <Accordion className={styles.acc}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                   <h4>An App for Every Body</h4>
                    </Accordion.Header>
                  <Accordion.Body>
                    The Nike Training Club app is the digital extension of the innovative products Nike makes to help all athletes train at their best. Launched in 2009, NTC originated as a means to take your workout anywhere. Today, NTC is expanding its reach to serve athletes in all places and life stages. In August, it launched its (M)ove like a Mother program globally. The comprehensive training program covers strength training, cardio, mobility and yoga through every stage of pregnancy. NTC has also become more inclusive for every body. In July, the app introduced its new adaptive athlete programming on the anniversary of the Americans with Disabilities Act, with workouts designed in partnership with adaptive training experts to provide lower-body modifications for anyone — disabled or not. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                  <h4>Robots That Protect Shoes and the Planet</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    Debuted in Nike Town London in September, B.I.L.L. (Bot-Initiated Longevity Lab) is a robotic system designed to clean and repair sneakers with selected customizations and a main goal to extend the life of a shoe. By repairing sneakers at scale, services like BILL help Nike move toward its goal of a circular future. Others in the Nike arsenal: Nike Refurbished, another in-store offering that tidies up used footwear, and Nike Recycling and Donation, which allows athletes to pass on and repurpose the products they love. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h4>Coaching That Brings Girls into Sport</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    Faced with complex cultural, social and economic barriers to play, girls are dropping out of sport at twice the rate of boys. To help address these barriers, this past summer Nike partnered with ICOACHKIDS to create the Made to Play Coaching Girls Guide, an accessible, approachable series of coaching tutorials that prep anyone to be a volunteer youth coach. The free, open-source guide was cocreated with the Center for Healing and Justice Through Sport to equip coaches and other caring adults with tools that can help make sport fun for girls.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className={styles.contents}>
              <p className={styles.contents_title}>How Digital Design Is Pushing Air Innovation</p>
              <div className={styles.innovation}>
                <div className={styles.innovation01}>
                  <div>
                    <img src={process.env.PUBLIC_URL +"/images/innovation01.jpg"} alt="" />
                  </div>
                  <div className={styles.innovation_txt}>
                    <p>Transformational Technology</p>
                    <ul>
                      <li>No technology is as synonymous with Nike as Air. It shows up in 50% of Nike footwear.</li>
                      <li>Air is one of Nike’s most sustainably-minded innovations. More than 90 percent of Air manufacturing waste is reused, and Air soles are made with at least 50 percent recycled material.</li>
                      <li>Since its inception in 1979, Air has always evolved, from Tinker Hatfield’s iconic visible Air design to showing up in new sport categories, like global football’s Air Zoom Mercurial boot.</li>
                    </ul>
                  </div>
                </div>
             
                <div className={styles.innovation02}>
                  <div><img src={process.env.PUBLIC_URL +"/images/innovation02.jpg"} alt="" /></div>
                  <div className={styles.innovation_txt}>
                    <p>The New Age of Air</p>
                    <ul>
                      <li>Cutting-edge digital product creation capabilities are fueling a revolutionary era of Air marked by quicker responses to athlete insights.</li>
                      <li>For example, VR design software allows teams to collaborate in real time and three dimensions, while computational engineering tools assess how designs will perform and hold up in the real world.</li>
                      <li>Machine learning and digital twin technology also accelerate prototyping and reduce the need for — and environmental impact of — physical samples.</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.innovation03}>
                  <div><img src={process.env.PUBLIC_URL +"/images/innovation03.jpg"} alt="" /></div>
                  <div className={styles.innovation_txt}>
                    <p>A Better Athlete Experience</p>
                    <ul>
                      <li>The Air Max Scorpion is the first shoe created with new digital product creation capabilities. It’s a major evolution in Nike Air technology, defined by technical precision and an unparalleled athlete experience.</li>
                      <li>By using computational design — advanced computing tools that assess data through set design parameters, like specific traction patterns and Air bag pressure — each shoe size is created for optimal performance.</li>
                    </ul>
                  </div>
                </div>
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