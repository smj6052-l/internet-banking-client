import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./styles/login.style";

// 로그인 페이지
export default function Login() {
  return (
    <>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.InnerContainer>
          <S.Header>
            <S.Title>로그인</S.Title>
          </S.Header>
          <S.FormWrapper>
            <S.Form>
              <S.Input />
              <S.Input />
              <S.LoginButton type="submit">로그인</S.LoginButton>
            </S.Form>
            <S.SignupHeader>아직 계정이 없으신가요?</S.SignupHeader>
            <S.SignupButton>회원가입하기 &rarr;</S.SignupButton>
          </S.FormWrapper>
        </S.InnerContainer>
      </S.Container>
    </>
  );
}
