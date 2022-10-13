import React, { useRef } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Logo } from "../styles/Logo";

export const Header = () => {
  const postBtn = useRef<HTMLButtonElement>(null);

  const postBtnClick = () => {
    if (postBtn.current !== null) {
      postBtn.current.style.borderBottom = "none";
      window.location.href = "/write";
    }
  };
  return (
    <Frame>
      <Logo width={"70"} src="../../assets/BlogSSM-logo-noback.png" />
      <HeaderBtn>
        <Button
          ref={postBtn}
          onClick={postBtnClick}
          height={40}
          color={"#858585"}
          style={{ fontFamily: "Galmuri11", fontSize: "18px" }}
        >
          글 작성
        </Button>
      </HeaderBtn>
    </Frame>
  );
};

const Frame = styled.div`
  display: flex;
  padding: 0 10%;
  width: 80%;
  height: 65px;
  background-color: white;
  border-bottom: 0.4px solid #6b6b6b;
`;

const HeaderBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;
