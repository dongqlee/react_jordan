import { useState } from "react"
import { Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link, useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { addItem, addPro } from "./store"
import Accordion from 'react-bootstrap/Accordion';

const Button = styled.button`
  width: 200px; height: 40px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  background-color: white;
`

export default function Prodetail(props) {
  const {data} = props
  const {id} = useParams();
  const dispatch = useDispatch();
  const [ popup, setPopup ] = useState(false);
  const [ popup01, setPopup01] = useState(false);
  const array01 = [250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310]
  const array02 = [225, 230, 235, 240, 245, 250, 255, 260]
  const array03 = [225, 230, 235, 240, 245, 250]
  const array04 = [170, 175, 180, 185, 190, 195, 200, 210, 220]
  const array05 = [80, 90, 100, 110, 120, 130, 140, 150, 160]
  const array06 = [230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310]
  
  const size01 = ['S', 'M', 'L', 'XL', '2XL', '3XL']
  const size02 = ['XS', 'S','M', 'L', 'XL', '2XL']
  const size03 = ['S', 'M', 'L', 'XL']
  const size04 = ['240~270', '270~300']
  const size05 = ['원 사이즈']

  const arrsize01 = () => {
    const newArr = [];
    for(let i = 0; i < array01.length; i++ ) {
      newArr.push(<li key={i}>{ array01[i]}</li>);
    }
    return newArr;
  };
  const arrsize02 = () => {
    const newArr = [];
    for(let i = 0; i < array02.length; i++ ) {
      newArr.push(<li key={i}>{ array02[i]}</li>);
    }
    return newArr;
  };
  const arrsize03 = () => {
    const newArr = [];
    for(let i = 0; i < array03.length; i++ ) {
      newArr.push(<li key={i}>{ array03[i]}</li>);
    }
    return newArr;
  };
  const arrsize04 = () => {
    const newArr = [];
    for(let i = 0; i < array04.length; i++ ) {
      newArr.push(<li key={i}>{ array04[i]}</li>);
    }
    return newArr;
  };
  const arrsize05 = () => {
    const newArr = [];
    for(let i = 0; i < array05.length; i++ ) {
      newArr.push(<li key={i}>{ array05[i]}</li>);
    }
    return newArr;
  };
  const arrsize06 = () => {
    const newArr = [];
    for(let i = 0; i < array06.length; i++ ) {
      newArr.push(<li key={i}>{ array06[i]}</li>);
    }
    return newArr;
  };

  const arrsize07 = () => {
    const newArr = [];
    for(let i = 0; i < size01.length; i++ ) {
      newArr.push(<li key={i}>{ size01[i]}</li>);
    }
    return newArr;
  };
  const arrsize08 = () => {
    const newArr = [];
    for(let i = 0; i < size02.length; i++ ) {
      newArr.push(<li key={i}>{ size02[i]}</li>);
    }
    return newArr;
  };
  const arrsize09 = () => {
    const newArr = [];
    for(let i = 0; i < size03.length; i++ ) {
      newArr.push(<li key={i}>{ size03[i]}</li>);
    }
    return newArr;
  };
  const arrsize10 = () => {
    const newArr = [];
    for(let i = 0; i < size04.length; i++ ) {
      newArr.push(<li key={i}>{ size04[i]}</li>);
    }
    return newArr;
  };
  const arrsize11 = () => {
    const newArr = [];
    for(let i = 0; i < size05.length; i++ ) {
      newArr.push(<li key={i}>{ size05[i]}</li>);
    }
    return newArr;
  };

  const navi = useNavigate()
  const btnBack = () => {
    navi(-1)
  }

  return (

    <Container>
      <Link to='/react_jordan'>
        <p className="home">HOME</p>
      </Link>
      <span className="icon"><i className="fa-solid fa-chevron-right"></i></span>
      <p onClick={btnBack} className='back'>Back</p>
        <span className="icon"><i className="fa-solid fa-chevron-right"></i></span>
      <p className="path">Detail</p>
      <div className="detail_sheet">
        <img src={data[id].image} alt='' style={{width: '50%'}} />
        <div className="info_box">
          <div className="txt_box">
            <div className="condition">{data[id].condition}</div>
            <div className="title">{data[id].title}</div>
            <div className="desc">{data[id].desc}</div>
            <div className="price_box">
              <div className="price">{((data[id].price) * (1-data[id].discount)).toLocaleString()} 원</div>
              {data[id].discount === 0 ? "" : <div className="origin">{data[id].price.toLocaleString()} 원</div>}
            </div>
            {data[id].discount === 0? '' : <div className="discount">
              {(data[id].discount) * 100 + '% 할인'}
            </div>}
            <p className="size_txt">사이즈 선택</p>
            <p className="size_chk">사이즈 가이드</p>
          </div>
          {data[id].type02 === 'snkrs' ? (data[id].type01 === 'men'? 
          <ul className="size_box">
            {arrsize01()} 
          </ul> 
          : (data[id].type01 === 'women' ? 
          <ul className="size_box">
            {arrsize02()}
          </ul> 
          : (data[id].type01 === 'junior' ? 
          <ul className="size_box">
            {arrsize03()} 
          </ul> 
          : (data[id].type01 === 'kids' ? 
          <ul className="size_box">
            {arrsize04()} 
          </ul> 
          : (data[id].type01 === 'baby' ? 
          <ul className="size_box">
            {arrsize05()} 
          </ul>  
          : 
          <ul className="size_box">
            {arrsize06()} 
          </ul> )))))
          : ''}

          {data[id].type02 === 'top' ? (data[id].type01 === 'men'? 
          <ul className="size_box">
            {arrsize07()}
          </ul>   
          : (data[id].type01 === 'women' ? 
          <ul className="size_box">
            {arrsize08()} 
          </ul>  
          : (data[id].type01 === 'junior' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul>   
          : (data[id].type01 === 'kids' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul>  
          : (data[id].type01 === 'baby' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul> 
          : "")))))
          : ''}

          {data[id].type02 === 'pants' ? (data[id].type01 === 'men'? 
          <ul className="size_box">
            {arrsize07()} 
          </ul>  
          : (data[id].type01 === 'women' ? 
          <ul className="size_box">
            {arrsize08()} 
          </ul>  
          : (data[id].type01 === 'junior' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul>  
          : (data[id].type01 === 'kids' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul> 
          : (data[id].type01 === 'baby' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul>  
          : "")))))
          : ''}

          {data[id].type02 === 'jacket' ? (data[id].type01 === 'men'? 
          <ul className="size_box">
            {arrsize07()}
          </ul> 
          : (data[id].type01 === 'women' ? 
          <ul className="size_box">
            {arrsize08()} 
          </ul>  
          : (data[id].type01 === 'junior' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul>  
          : (data[id].type01 === 'kids' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul> 
          : (data[id].type01 === 'baby' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul> 
          : "")))))
          : ''}

          {data[id].type02 === 'goods' ? (data[id].type03 === 'c'? 
          <ul className="size_box">
            {arrsize11()}
          </ul>
          : (data[id].type03 === 's' ? 
          <ul className="size_box">
            {arrsize10()}
          </ul>
          : ""))
          : ''}
          <div className="btn_box"> 
            <Button className="buy" onClick={() => {
              setPopup01(true)
            }}>
              위시리스트
            </Button>  
            <Button className="cart" onClick={() => {
               setPopup(true)
            }}
             >장바구니</Button>
          </div>

          <p className="notice_txt">이 제품은 프로모션 코드 적용이 불가합니다.</p>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>무료 배송 및 반품</Accordion.Header>
        <Accordion.Body className="acc">
          일반 배송<br />
          • 배송지역: 전국 (일부 지역 제외)<br />
          • 배송비: 무료배송<br />
          • 제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품 서비스가 가능합니다.<br />
          일반 배송 <span>자세히 알아보기</span><br />
          반품 <span>자세히 알아보기</span><br />
          <br />
          오늘도착 서비스<br />
          • 이용시간: 낮 12시까지 결제 시, 당일 도착 (일요일, 공휴일 제외)<br />
          • 서비스지역: 서울∙과천∙의왕∙군포∙수원∙성남∙안양시 전체, 용인시 수지구∙기흥구, 부천시 중동∙상동∙심곡동<br />
          • 서비스비용: 5,000원<br />
          <span>자세히 알아보기</span><br />
          <br />
          A/S 안내 <br />
          • 나이키 온라인에서 구매하신 제품에 대한 A/S 는 나이키코리아 고객센터(<span>080-022-0182</span>)에서 유선으로만 접수 가능합니다.<br />
          <span>자세히 알아보기</span><br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>추가 정보</Accordion.Header>
        <Accordion.Body className="acc">
          상품정보제공고시<br />
          • 제조연월: 수입제품으로 각 상품별 입고 시기에 따라 상이하여 정확한 제조연월 제공이 어렵습니다. 제조연월을 확인하시려면 고객센터에 문의하시기 바라며, 정확한 제조연월은 배송받으신 제품의 라벨을 참고하시기 바랍니다.<br /><br />
          • A/S 책임자와 전화번호: (유)나이키코리아 온라인 스토어 고객센터 / 080-022-0182<br />
          • 세탁방법 및 취급시 주의사항: 자세한 내용은 <span>'자세히 보기'</span>를 클릭하여 확인 부탁드립니다.<br />
          • 미성년자 권리 보호 안내: 자세한 내용은 <span>'자세히 보기'</span> 를 클릭하여 확인 부탁드립니다.<br />
          • 품질보증기준: 품질보증기간-섬유 및 일반 소재(구입 후 6개월), 가죽소재(구입 후 1년). 유통 중 손상되었거나 품질에 이상이 있는 제품에 한하여 소비자 피해 보상 규정에 의거 보상하여 드립니다. 단, 제품에 부착되어 있는 사용방법 및 취급 시 주의사항에 따라 제품을 관리해 주시고, 소비자 부주의로 인한 품질 이상 및 변형에 대해서는 책임을 지지 않습니다.<br /><br />
          • 제조자/수입품의 경우 수입자를 함께 표기: Nike. Inc / (유)나이키코리아<br />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>  
      </div>

      {popup01 === true ? 
      <div className="pop">
        <p>위시리스트에 담으시겠습니까?</p>
        <div className="btn_pop">
          <button onClick={() => {
            dispatch(addPro({id: data[id].id, image: data[id].image, desc: data[id].desc, discount: data[id].discount, title: data[id].title, count:1, price: data[id].price}))
            setPopup01(false)
            }}>확인</button>
          <button onClick={() => {
            setPopup01(false)
          }}>취소</button>
        </div>
      </div> 
      : null}
      
      {popup === true ? 
        <div className="pop">
          <p>장바구니에 담으시겠습니까?</p>
          <div className="btn_pop">
            <button onClick={() => {
              dispatch(addItem({id: data[id].id, image: data[id].image, desc: data[id].desc, discount: data[id].discount, title: data[id].title, count:1, price: data[id].price}))
              setPopup(false)
              alert('장바구니에 담았습니다.')
              }}>확인</button>
            <button onClick={() => {
              setPopup(false)
            }}>취소</button>
          </div>
        </div> 
      : null}
    </Container>
  )
}