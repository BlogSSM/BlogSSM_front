import styled from "styled-components";

export const Frame = styled.div`
  display: flex;
  width: 80%;
  height: 80vh;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 15px;
`;

export const TitleInput = styled.input`
  border: 1px solid #dadde6;
  background-color: white;
  padding: 2% 2%;
  font-size: large;
  font-weight: bold;
  border-radius: 4px;
  font-family: "Galmuri11";
  &:focus {
    outline: none;
  }
`;

export const ContentTextarea = styled.textarea`
  border: none;
  height: 80%;
  background-color: #f4f4f4;
  &:focus {
    outline: none;
    background-color: #d0d0d0;
  }
`;
