import * as S from "./style.postings";
import postSample from "../../../dummy/post-sample.json";
import moment from "moment";
import { Link } from "react-router-dom";

export const Postings = () => {
  return (
    <S.Frame>
      {postSample.map((post) => {
        const list = (
          <Link
            to={`/post/${post.post_id}`}
            style={{
              textDecoration: "none",
              color: "black",
              width: "90%",
              height: "100%",
            }}
          >
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
          </Link>
        );
        return list;
      })}
    </S.Frame>
  );
};
