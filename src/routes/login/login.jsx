import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./styles/login.style";

// 로그인 페이지
export default function Login() {
  const [userid, setUserid] = useState("");
  const [userpw, setUserpw] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const useridInputRef = useRef(null);
  const userpwInputRef = useRef(null);

  const navigate = useNavigate();

  const handleUseridInputChange = () => {
    if (useridInputRef.current) {
      setUserid(useridInputRef.current.value);
    }
  };
  const handleUserpwInputChange = () => {
    if (userpwInputRef.current) {
      setUserpw(userpwInputRef.current.value);
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (!userid) {
      return alert("아이디를 입력하세요");
    }
    if (!userpw) {
      return alert("비밀번호를 입력하세요");
    }

    const body = {
      userid,
      userpw,
    };

    // POST: 로그인
    const loginPostURL = `api/account/login`;
    axios
      ?.post(loginPostURL, body, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      ?.then((res) => {
        console.log(res);

        if (res.status === 200) {
          navigate("/home");
        }
      })
      ?.catch(() => {
        alert("로그인 실패");
        setIsLoading(false);
      });
    setIsLoading(true);
  };

  return (
    <>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.InnerContainer>
          <S.Header>
            <S.Title>로그인</S.Title>
          </S.Header>
          <S.FormWrapper>
            <S.Form onSubmit={handleLoginSubmit}>
              <S.Input
                onChange={handleUseridInputChange}
                type="text"
                value={userid}
                placeholder="아이디"
                ref={useridInputRef}
              />
              <S.Input
                onChange={handleUserpwInputChange}
                type="password"
                value={userpw}
                placeholder="비밀번호"
                ref={userpwInputRef}
              />
              <S.LoginButton type="submit" disabled={isLoading}>
                로그인
              </S.LoginButton>
            </S.Form>
            <S.SignupHeader>아직 계정이 없으신가요?</S.SignupHeader>
            <S.SignupButton>회원가입하기 &rarr;</S.SignupButton>
          </S.FormWrapper>
        </S.InnerContainer>
      </S.Container>
    </>
  );
}
