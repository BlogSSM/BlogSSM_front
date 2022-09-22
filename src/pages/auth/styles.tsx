import styled from "styled-components";

export const View = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 40px;
`;

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 25px;
`;

export const MainText = styled.span`
  font-weight: 400;
  font-size: 34px;
`;

export const LoginView = styled.div`
  display: flex;
  text-align: left;
  padding: 30px;
  width: 300px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  flex-direction: column;
  gap: 22px;
`;

export const Input = styled.input`
  width: 290px;
  height: 45px;
  border: none;
  background: #f4f4f4;
  padding-left: 10px;
  &:focus {
    outline: none;
    background-color: #d0d0d0;
  }
`;

export const Button = styled.button`
  font-family: "Galmuri9";
  background-color: ${({ color }) => color};
  color: white;
  font-size: 25px;
  height: 60px;
  border: none;
  border-bottom: 7px solid
    ${({ color }) => (color === "#858585" ? "#646464" : "#9EB4EB")};
`;

export const Email = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const EmailInput = styled.input`
  height: 45px;
  border: none;
  background: #f4f4f4;
  padding-left: 10px;
  &:focus {
    outline: none;
    background-color: #d0d0d0;
  }
`;

export const DefalutEmail = styled.span`
  font-size: 14px;
  color: #373737;
`;
