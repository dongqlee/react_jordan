import { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.div`
  font-size: 28px;
  position: absolute;
  top: 60px; left: 50%;
  transform: translateX(-50%);
`
const Button = styled.button`
  width: 300px; height: 40px;
  border: none;
  background-color: black;
  color: white;
  &.err {
    background-color: #eee;
    color: #999;
  }
  &.scs {
    background-color: black;
    color: white;
  }
  &.scs:hover {
    text-decoration: underline;
  }
`
export default function Join() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [chkpw, setChkPw] = useState(''); 

  const [nameMsg, setNameMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [pwMsg, setPwMsg] = useState('');
  const [chkpwMsg, setChkpwMsg] = useState('');

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isChkpw, setIsChkpw] = useState(false);

  const onChangeName = (e) => {
    const curName = e.target.value;
    setName(curName);
    if(curName.length < 2 ) {
      setNameMsg('이름은 2자 이상 입력해주세요.')
      setIsName(false);
    } else {
      setNameMsg(curName+'님 반갑습니다.');
      setIsName(true);
    }
  };

  const onChangeEmail= (e) => {
    const curEmail = e.target.value;
    setEmail(curEmail);
    const emailRE = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/ ;
    if(!emailRE.test(curEmail)) {
      setEmailMsg('올바른 이메일 형식이 아닙니다.');
      setIsEmail(false);
    } else {
      setEmailMsg('사용 가능한 이메일입니다.');
      setIsEmail(true);
    }  
  };

  const onChangePw = (e) => {
    const curPw = e.target.value;
    setPw(curPw);
    const pwRE = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if(!pwRE.test(curPw)) {
      setPwMsg('영문자, 대소문자, 숫자, 특수문자 조합으로 8자리 이상 입력하세요.');
      setIsPw(false);
    } else {
      setPwMsg('사용가능한 비밀번호 입니다.');
      setIsPw(true);
    }
  };

  const onChangeChkpw = (e) => {
    const curChkpw = e.target.value;
    setChkPw(curChkpw);
    if(pw !== curChkpw) {
      setChkpwMsg('비밀번호가 일치하지 않습니다.');
      setIsChkpw(false);
    } else {
      setChkpwMsg('비밀번호가 일치합니다.');
      setIsChkpw(true);
    }
  };

  return(
    <>
      <Container>
        <section className="join_box">
          <Title>회원가입</Title>
          <div className="join_form">
            <div className="input_box">
              <input type="text" id="name" name="name" value={name} placeholder="이름" onChange={onChangeName} maxLength='10' />
              <span className={`msg ${isName ? 'scs' : 'err'}`}>{nameMsg}</span>
            </div>
            <div className="input_box">
              <input type="text" id="email" name="email" value={email} placeholder="이메일" onChange={onChangeEmail} />
              <span className={`msg ${isEmail ? 'scs' : 'err'}`}>{emailMsg}</span>
            </div>
            <div className="input_box">
              <input type="password" id="pw" name="pw" value={pw} placeholder="비밀번호" onChange={onChangePw} />
              <span className={`msg ${isPw ? 'scs' : 'err'}`}>{pwMsg}</span>
            </div>
            <div className="input_box">
              <input type="password" id="chkpw" name="chkpw" value={chkpw} placeholder="비밀번호 확인" onChange={onChangeChkpw} />
              <span className={`msg ${isChkpw ? 'scs' : 'err'}`}>{chkpwMsg}</span>
            </div>

            <Button type="submit" className={`btn_join ${(isName && isEmail && isPw && isChkpw) ? 'scs' : 'err'}`} disabled={!(isName && isEmail && isPw && isChkpw)}>가입하기
            </Button>
          </div>
          
        </section>
      </Container>
    </>
  )
};