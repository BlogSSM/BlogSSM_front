import * as S from "./style.write";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { useRef, useState } from "react";
import { Button } from "../../styles/Button";
import client from "../../util/client";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil";

export const Write = () => {
  const newPost = new FormData();
  const [content, setContent] = useState<string>();
  const [title, setTitle] = useState<string>();
  const textRef = useRef<Editor>(null);
  const postBtn = useRef<HTMLButtonElement>(null);
  const user = useRecoilValue(userState);

  console.log(user);

  const handleChangeInput = () => {
    setContent(textRef.current?.getInstance().getHTML());
  };

  const postBtnClick = async () => {
    if (title && content) {
      if (postBtn.current !== null) {
        postBtn.current.style.borderBottom = "none";
      }
      newPost.append("imageFile", "test");
      newPost.append("title", title);
      newPost.append("contact", content);
      newPost.append("uid", user["uid"]);
      newPost.append("userName", user["userName"]);
      const response = await client.post("/community/create_context", newPost);
      console.log(response);
      if (response.status === 200) {
        alert("글 작성 완료");
        window.location.href = "/";
      }
    } else {
      alert("입력되지 않았습니다.");
    }
  };

  return (
    <S.Frame>
      <S.TitleInput
        type="text"
        placeholder="제목을 입력하세요."
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="file" />
      <Editor
        ref={textRef}
        previewStyle="vertical"
        height="80%"
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]}
        initialEditType="markdown"
        hideModeSwitch={true}
        onChange={handleChangeInput}
      />
      <Button color="#858585" height={50} ref={postBtn} onClick={postBtnClick}>
        글 작성
      </Button>
    </S.Frame>
  );
};
