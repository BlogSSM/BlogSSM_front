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
      <Box>
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
      </Box>
    </Frame>
  );
};

const Frame = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  justify-content: center;
  background-color: white;
  border-bottom: 0.4px solid #6b6b6b;
`;

const Box = styled.div`
  display: flex;
  width: 80%;
`;

const HeaderBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;
