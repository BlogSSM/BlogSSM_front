import React, { useRef } from "react";
import { Button } from "../../../styles/Button";
import { Logo } from "../../../styles/Logo";
import * as S from "../auth.styles";

export const SignUp = () => {
  const signUpBtn = useRef<HTMLButtonElement>(null);

  const signUpBtnClick = () => {
    if (signUpBtn.current !== null) {
      signUpBtn.current.style.borderBottom = "none";
    }
  };

  return (
    <S.View>
      <Logo width={"100"} src="../../assets/BlogSSM-logo-noback.png" />
      <S.LoginView>
        <S.MainText>회원가입</S.MainText>
        <S.Input type="email" placeholder="성함을 입력해주세요." />
        <S.Input type="text" placeholder="아이디를 입력해주세요." />
        <S.Input type="password" placeholder="비밀번호를 입력해주세요." />
        <S.Email>
          <S.EmailInput type="text" placeholder="ex) 202110406" />
          <S.DefalutEmail>@bssm.hs.kr</S.DefalutEmail>
        </S.Email>
        <S.Input type="text" placeholder="대표 블로그 링크를 입력해주세요." />
        <Button
          height={60}
          ref={signUpBtn}
          onClick={signUpBtnClick}
          color="#BACAF2"
        >
          회원가입
        </Button>
      </S.LoginView>
    </S.View>
  );
};