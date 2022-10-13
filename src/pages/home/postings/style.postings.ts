import styled from "styled-components";

export const Frame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2% 10%;
  grid-row-gap: 24px;
  place-items: start center;
`;

export const Post = styled.div`
  width: 85%;
  height: 380px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 5%;
`;

export const Title = styled.span``;

export const Thumb = styled.img`
  width: 100%;
`;

export const Desc = styled.span``;

export const InfoBar = styled.div`
  /* height: 100%; */
  display: flex;
  align-items: flex-end;
`;

export const Name = styled.span``;

export const Date = styled.span``;

export const Heart = styled.span``;

export const HeartNum = styled.span``;
