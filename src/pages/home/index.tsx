import * as S from "./style.postings";
import postSample from "../../dummy/post-sample.json";
import moment from "moment";
import { Link } from "react-router-dom";
import client from "../../util/client";
import { useMemo, useState } from "react";

interface Post {
  tid: number;
  uid: number;
  image: string;
  title: string;
  context: string;
  userName: string;
  date: string;
  heart: number;
}

export const Postings = () => {
  const [allPost, setAllPost] = useState<Post[]>();

  const getAllPost = async () => {
    const response = await client.get("/community/All_board");
    // console.log(response.data.data);
    setAllPost(response.data.data);
  };

  useMemo(() => getAllPost(), []);

  return (
    <S.Frame>
      {allPost
        ? allPost.map((post) => {
            const list = (
              <Link
                to={`/post/${post.tid}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  width: "90%",
                  height: "100%",
                }}
                key={post.tid}
              >
                <S.Post>
                  <S.Title>{post.title}</S.Title>
                  <S.ThumbBox>
                    <S.Thumb src={post.image} />
                  </S.ThumbBox>
                  <S.Bottom>
                    <S.Desc>{post.context}</S.Desc>
                    <S.InfoBar>
                      <S.InfoBox>
                        <span>{post.userName}</span>
                        <span>|</span>
                        <S.Date>
                          {moment(post.date).format("YYYY년 MM월 DD일")}
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
          })
        : null}
    </S.Frame>
  );
};
