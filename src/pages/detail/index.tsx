import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../util/client";
import { Post } from "../../util/Post";
import { Frame } from "./style.detail";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";

export const PostDetail = () => {
  const { post_id } = useParams();
  const [post, setPost] = useState<Post>();
  console.log(post_id);

  const getPostDetail = async () => {
    const response = await client.get(`/community/get_contact?id=${post_id}`);
    console.log(response.data);

    setPost(response.data);
  };

  useMemo(() => getPostDetail(), []);
  return (
    <>
      {post && (
        <Frame>
          <h3>{post.title}</h3>
          <Viewer initialValue={post.contactId} />
        </Frame>
      )}
    </>
  );
};
