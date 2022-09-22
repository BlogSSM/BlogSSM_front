import styled from "styled-components";

export const Button = styled.button`
  font-family: "Galmuri9";
  background-color: ${({ color }) => color};
  color: white;
  font-size: 25px;
  height: ${({ height }: { height: number }) => height}px;
  border: none;
  border-bottom: 7px solid
    ${({ color }) => (color === "#858585" ? "#646464" : "#9EB4EB")};
`;
