import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../../recoil";
import { Button } from "../../../styles/Button";
import { Logo } from "../../../styles/Logo";
import client from "../../../util/client";
import * as S from "../auth.styles";

export const Login = () => {
  const loginBtn = useRef<HTMLButtonElement>(null);
  const signUpBtn = useRef<HTMLButtonElement>(null);
  const [mail, setMail] = useState<string>();
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [curUser, setCurUser] = useRecoilState(userState);

  const loginBtnClick = async () => {
    if (loginBtn.current !== null) {
      loginBtn.current.style.borderBottom = "none";
    }
    if (mail && id && password) {
      const response = await client.post("/login/signin", {
        id: id,
        pwd: password,
        email: mail,
      });
      if (response.data["success"]) {
        localStorage.setItem("token", response.data["token"]);
        window.location.href = "/";
      }
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
      <S.LoginView>
        <S.MainText>로그인</S.MainText>
        <S.Input
          type="email"
          placeholder="BSSM 이메일을 입력해주세요."
          onChange={(e) => setMail(e.target.value)}
        />
        <S.Input
          type="text"
          placeholder="아이디를 입력해주세요."
          onChange={(e) => setId(e.target.value)}
        />
        <S.Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          height={60}
          ref={loginBtn}
          onClick={loginBtnClick}
          color="#858585"
        >
          로그인
        </Button>
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
