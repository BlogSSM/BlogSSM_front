import React, { useRef } from "react";
import * as S from "./styles";

export const Login = () => {
  const loginBtn = useRef<HTMLButtonElement>(null);
  const signUpBtn = useRef<HTMLButtonElement>(null);

  const loginBtnClick = () => {
    if (loginBtn.current !== null) {
      loginBtn.current.style.borderBottom = "none";
    }
  };
  const signUpBtnClick = () => {
    if (signUpBtn.current !== null) {
      signUpBtn.current.style.borderBottom = "none";
    }
    window.location.href = "/signUp";
  };

  return (
    <S.View>
      <S.Logo src="../../assets/BlogSSM-logo-noback.png" />
      <S.LoginView>
        <S.MainText>로그인</S.MainText>
        <S.Input type="email" placeholder="BSSM 이메일을 입력해주세요." />
        <S.Input type="text" placeholder="아이디를 입력해주세요." />
        <S.Input type="password" placeholder="비밀번호를 입력해주세요." />
        <S.Button ref={loginBtn} onClick={loginBtnClick} color="#858585">
          로그인
        </S.Button>
        <S.Button ref={signUpBtn} onClick={signUpBtnClick} color="#BACAF2">
          회원가입
        </S.Button>
      </S.LoginView>
    </S.View>
  );
};
