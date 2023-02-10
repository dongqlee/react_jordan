import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { canPro } from "./store";

const Title = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 32px;
  font-weight: bold;
`

export default function Wish() {
  const state = useSelector((state) => {return state});
  const dispatch = useDispatch();

  return(
    <Routes>
      <Route path='/' element={
        <Container>
          <Title>위시리스트</Title>
          <section className="wish_list">
            {
              state.wish.map((item, i) => {
                return (
                  <div key={i} className='wish_item'>
                    <img src = {state.wish[i].image} alt='' />
                    <p className="title">{state.wish[i].title}</p>
                    <p className="desc">{state.wish[i].desc}</p>
                    <div className="price_box">
                      <p className="price">
                        {((state.wish[i].price)*(1-state.wish[i].discount)).toLocaleString()} 원
                      </p>
                      {state.wish[i].discount !==0 ? 
                      <p className="origin">{state.wish[i].price.toLocaleString()} 원</p>
                      :''}
                    </div>
                    {state.wish[i].discount !==0 ? 
                    <p className="discount">{state.wish[i].discount * 100 + '% 할인'}</p> 
                    :''}
                    <button className="btn_delete" onClick={()=>{
                      dispatch(canPro(state.wish[i].id))
                    }}>삭제하기</button>
                  </div>
                )
              })
            }
          </section>
        </Container>
      }>
      </Route> 
    </Routes>
  )
}
