import * as S from "./style.postings";
import moment from "moment";
import { Link } from "react-router-dom";
import client from "../../util/client";
import { useMemo, useState } from "react";
import { Post } from "../../util/Post";

export const Postings = () => {
  const [allPost, setAllPost] = useState<Post[]>([]);

  const getPost = async () => {
    const post = await client.get("/community/All_board");
    const blog_post = await client.get("/community/getBlogLink");
    setAllPost(post.data.data);
    console.log(post.data.data);

    for (let i = 0; i < blog_post.data.data.length; i++) {
      setAllPost((prev) => [...prev, blog_post.data.data[i]]);
    }
  };

  useMemo(() => getPost(), []);

  return (
    <S.Frame>
      {allPost
        ? allPost
            .sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
            .map((post) => {
              const list = post.tid ? (
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
                      <S.Desc>
                        {post.context.replace(
                          /[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,
                          ""
                        )}
                      </S.Desc>
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
              ) : (
                <div
                  onClick={() => {
                    window.location.href = post.url[0];
                  }}
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
                          {/* <span>{post.userName}</span>
                          <span>|</span> */}
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
                </div>
              );
              return list;
            })
        : null}
    </S.Frame>
  );
};
