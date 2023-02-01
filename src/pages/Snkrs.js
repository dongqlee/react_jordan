import { useState } from "react"
import { Container } from "react-bootstrap"
import { Link, Route, Routes } from "react-router-dom"
import prodata from "./proData"
import Prodetail from "./Prodetail"

export default function Snkrs() {
  const [data] = useState(prodata)
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Container>
          <Link to='/react_jordan'>
            <p className="home">HOME</p>
          </Link>
          <span className="icon"><i class="fa-solid fa-chevron-right"></i></span>
          <p className="path">SNKRS</p>
          <section className='pro_sheet'>
            {
              data.map((data, i) => {
                return (
                  <>
                    {data.type02 === 'snkrs' ? 
                    <div className="pro">
                      <Link to={`/Snkrs/detail/${i}`}>
                        <img src={data.image} alt='' style={{width: '100%'}}/>
                        <div className="txt_box">
                          <div className="condition">{data.condition}</div>
                          <div className="title">{data.title}</div>
                          <div className="desc">{data.desc}</div>
                          <div className="color">{data.color}</div>
                          <div className="price_box">
                            <div className="price">{((data.price) * (1-data.discount)).toLocaleString()} 원</div>
                            {data.discount === 0 ? "" : <div className="origin">{data.price.toLocaleString()} 원</div>}
                          </div>
                          {data.discount === 0 ? "" : <div className="discount">{(data.discount) * 100 + '% 할인'}</div>}
                        </div>
                      </Link>
                    </div> 
                    : ""}
                  </>     
                )
              })
            }
          </section>
        </Container>
        }>
        </Route>
        <Route path="detail/:id" element={<Prodetail data={data}/>}/>
      </Routes>
      
    </>
  )
}