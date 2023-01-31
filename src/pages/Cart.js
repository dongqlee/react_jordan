import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteItem, subCount } from "./store";


export default function Cart() {
  const state = useSelector((state) => {return state})
  const dispatch = useDispatch()

  return (
    <Container>
      <div>
        <h4>장바구니</h4>
        <Table className="cart_sheet">
          <thead>
            <tr>
              <th>Number</th>
              <th>상품 정보</th>
              <th>사이즈</th>
              <th>개수</th>
              <th>가격</th>
              <th>총 금액</th>
              <th>제외</th>
            </tr>
          </thead>
          <tbody>
            {
              state.cart.map((item, i) => {
                
                return (
                  <tr key={i}>
                    <td className="txt">{i+1}</td>
                    <td>
                        <div>
                        <img src= {state.cart[i].image} alt='' style={{width: '100px'}}/>
                        </div>
                      <p>{state.cart[i].title}</p>
                      <p>{state.cart[i].desc}</p>
                    </td>
                    <td className="txt">사이즈</td>
                    <td className="ea">
                      <button onClick={()=> {
                        dispatch(addCount(state.cart[i].id))
                      }}>+</button>
                      {state.cart[i].count}
                      <button onClick={() => {
                        dispatch(subCount(state.cart[i].id))
                      }}>-</button>
                    </td>
                    <td className="txt">{state.cart[i].price.toLocaleString()} 원</td>
                    <td className="txt">{(state.cart[i].price * state.cart[i].count).toLocaleString()} 원</td>
                    <td className="txt delete">
                      <button onClick={()=> {
                        dispatch(deleteItem(state.cart[i].id))
                      }}>삭제</button>
                    </td>
                  </tr>
                )
              })
            }
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>총 결제 금액</td>
              <td></td>
            </tr>
            <tr>
            <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>결제하기</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  )
}