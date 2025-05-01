import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sms = () => {
  
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  const [verificationCode, setVerificationCode] = useState("");
  const [isSendVerificationCode, setIsSendVerificationCode] = useState(false)
  const [confirmVerificationCode, setConfirmVerificationCode] = useState(false)

  const getVerificationCodeEmail = async () => {

    setIsSendVerificationCode(true)

    await fetch("http://localhost:10000/auth/sendEmail", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify("codefuling@gmail.com")
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setIsLoading(false)
        setVerificationCode(res.verificationCode)
      })
      .catch(console.error)
  }

  const getIsVerificationCode = async () => {

    await fetch("http://localhost:10000/auth/verifyCode", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(code)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setConfirmVerificationCode(res.isFlag)
      })
      .catch(console.error)
    }

  console.log("confirmVerificationCode", confirmVerificationCode)
    
  const onChangeValue = (e) => {
    let code = e.target.value;
    setCode(code)
  }

  return (
    <div>
      SMS 테스트
      {confirmVerificationCode ? (
        <Link to={"/sign-in"}>상세정보 입력</Link>
      ) : (
        isSendVerificationCode ? (
          <>
            <p>{isLoading ? "인증코드 전송중...😅" : verificationCode}</p>
            <div>
              <input onChange={onChangeValue}/>
            </div>
            <button onClick={getIsVerificationCode}>인증번호 확인</button>
          </>
        ) : (
          <button onClick={getVerificationCodeEmail}>인증코드 발송</button>
        )
      )}
    </div>
  );
};

export default Sms;