import * as S from "./style.postings";
import postSample from "../../../dummy/post-sample.json";

export const Postings = () => {
  return (
    <S.Frame>
      {postSample.map((post) => {
        const list = (
          <S.Post>
            <S.Title>{post.title}</S.Title>
            <S.Thumb src={post.thumbnail} />
            <S.Desc>{post.desc}</S.Desc>
            <S.InfoBar>
              <S.Name>{post.name}</S.Name>
              <S.Date>{post.writetime}</S.Date>
              <S.Heart>♥︎</S.Heart>
              <S.HeartNum>{post.heart}</S.HeartNum>
            </S.InfoBar>
          </S.Post>
        );
        return list;
      })}
    </S.Frame>
  );
};
