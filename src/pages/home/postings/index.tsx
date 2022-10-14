import * as S from "./style.postings";
import postSample from "../../../dummy/post-sample.json";
import moment from "moment";

export const Postings = () => {
  return (
    <S.Frame>
      {postSample.map((post) => {
        const list = (
          <S.Post>
            <S.Title>{post.title}</S.Title>
            <S.ThumbBox>
              <S.Thumb src={post.thumbnail} />
            </S.ThumbBox>
            <S.Bottom>
              <S.Desc>{post.desc}</S.Desc>
              <S.InfoBar>
                <S.InfoBox>
                  <span>{post.name}</span>
                  <span>|</span>
                  <S.Date>
                    {moment(post.writetime).format("YYYY년 MM월 DD일")}
                  </S.Date>
                </S.InfoBox>
                <S.HeartBox>
                  <span>♥︎</span>
                  <span>{post.heart}</span>
                </S.HeartBox>
              </S.InfoBar>
            </S.Bottom>
          </S.Post>
        );
        return list;
      })}
    </S.Frame>
  );
};
