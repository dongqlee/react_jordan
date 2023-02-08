import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEamil] = useState('');
  const [pw, setPw] = useState('');
  const onChangeEmail = (e) => {
    setEamil(e.target.value)
  };
  const onChangePw = (e) => {
    setPw(e.target.value) 
  }

  return(
    <>
      <Container>
        <div className="login_sheet">
          <p className="title">
            로그인을 위해 이메일과 비밀번호를 입력하세요.
          </p>

          <span className="nation">대한민국</span> 
          <span className='change'>변경</span>

          <div className="email">
            <input type="text" value={email} onChange={onChangeEmail} placeholder="이메일"/ >
          </div>
          <div className="pw">
            <input type="password" value={pw} onChange={onChangePw} placeholder="비밀번호"/ >
          </div>
          
          <p className="txt">
            계속 진행하면 나이키의 
            <span> 개인 정보 처리 방침</span> 및 <span>이용약관</span>에 동의하게 됩니다.
          </p>
          <div className="btn_box">
            <div className="btn_more" onClick={() => {
            if(email === 'abcde@naver.com') {
              if(pw === '1234') {
                alert('로그인성공')
              } else {
                alert('비밀번호 틀림')
              }
            } else {
              alert('아이디 없다.')
            }
            }}>로그인</div>
            <div className="btn_join"><Link to={'/Join'}>가입하기</Link></div>
          </div>
        </div>
      </Container>
    </>
  )
}