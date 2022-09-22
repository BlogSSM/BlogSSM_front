import React from "react";
import styled from "styled-components";
import postSample from "../../data/post-sample.json";

export const Postings = () => {
  return (
    <Frame>
      {postSample.map((post) => {
        const list = (
          <Post>
            <Title>{post.title}</Title>
            <Thumb src={post.thumbnail} />
            <Desc>{post.desc}</Desc>
            <InfoBar>
              <Name>{post.name}</Name>
              <Date>{post.writetime}</Date>
              <Heart>♥︎</Heart>
              <HeartNum>{post.heart}</HeartNum>
            </InfoBar>
          </Post>
        );
        return list;
      })}
    </Frame>
  );
};

const Frame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2% 10%;
  grid-row-gap: 24px;
  place-items: start center;
`;

const Post = styled.div`
  width: 85%;
  height: 380px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 5%;
`;

const Title = styled.span``;

const Thumb = styled.img`
  width: 100%;
`;

const Desc = styled.span``;

const InfoBar = styled.div`
  /* height: 100%; */
  display: flex;
  align-items: flex-end;
`;

const Name = styled.span``;

const Date = styled.span``;

const Heart = styled.span``;

const HeartNum = styled.span``;
