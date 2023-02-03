import { Container } from "react-bootstrap";

export default function Login() {
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
            <input type="text" placeholder="이메일"/ >
          </div>
          <div className="pw">
            <input type="password" placeholder="비밀번호"/ >
          </div>
          
          <p className="txt">
            계속 진행하면 나이키의 
            <span> 개인 정보 처리 방침</span> 및 <span>이용약관</span>에 동의하게 됩니다.
          </p>
          <div className="btn_more">로그인</div>
        </div>
      </Container>
    </>
  )
}