import styled from "styled-components";

export const Frame = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 32% 32% 32%;
  grid-gap: 2%;
  margin-top: 25px;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  height: 90%;

  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 5%;
  cursor: pointer;
`;

export const Title = styled.span`
  display: block;
  font-family: "Galmuri11";
  font-weight: bold;
  font-size: larger;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ThumbBox = styled.div`
  width: 100%;

  aspect-ratio: 4 / 3;
  object-fit: cover;
  overflow: hidden;
`;

export const Thumb = styled.img`
  width: 100%;

  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: all ease 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Desc = styled.span`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #666666;
`;

export const InfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #878787;
`;

export const InfoBox = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const HeartBox = styled.div`
  display: flex;
  gap: 5px;
  color: #ff2525;
`;

export const Bottom = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Date = styled.div`
  font-size: 0.8rem;
`;
