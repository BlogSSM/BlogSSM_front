import React from "react";
import styled from "styled-components";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

const LayoutStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
