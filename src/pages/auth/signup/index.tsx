import React, { useRef, useState } from "react";
import { Button } from "../../../styles/Button";
import { Logo } from "../../../styles/Logo";
import client from "../../../util/client";
import * as S from "../auth.styles";

export const SignUp = () => {
  const signUpBtn = useRef<HTMLButtonElement>(null);
  const [name, setName] = useState<string>();
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [mail, setMail] = useState<string>();
  const [link, setLink] = useState<string>();

  const signUpBtnClick = async () => {
    if (signUpBtn.current !== null) {
      signUpBtn.current.style.borderBottom = "none";
    }
    if (name && id && password && mail && link) {
      const response = await client.post("/login/register", {
        name: name,
        id: id,
        pwd: password,
        email: mail + "@bssm.hs.kr",
        link: link,
      });

      if (response.data["success"]) {
        localStorage.setItem("token", response.data["token"]);
      } else {
        alert(response.data["message"]);
      }
    }
  };

  return (
    <S.View>
      <S.LoginView>
        <S.MainText>회원가입</S.MainText>
        <S.Input
          type="email"
          placeholder="성함을 입력해주세요."
          onChange={(e) => setName(e.target.value)}
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
        <S.Email>
          <S.EmailInput
            type="text"
            placeholder="ex) 202110406"
            onChange={(e) => setMail(e.target.value)}
          />
          <S.DefalutEmail>@bssm.hs.kr</S.DefalutEmail>
        </S.Email>
        <S.Input
          type="text"
          placeholder="대표 블로그 링크를 입력해주세요."
          onChange={(e) => setLink(e.target.value)}
        />
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
