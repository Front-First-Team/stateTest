import { useRef, useState } from "react";
import styled from "styled-components";

function Comment({ data, deleteComment, post, setPost }) {
  const [isEditmode, setisEditmode] = useState(false)
  const contentRef = useRef();

  const onPressChangeEditMode = () => {
    setisEditmode(true);
  };

  const onPressEditMode = () => {
    setisEditmode(false);
    const Update = { ...post };
    const SelectedIndex = Update.Comments.findIndex((co) => co.id === data.id)

    Update.Comments[SelectedIndex] = {
      ...Update.Comments[SelectedIndex],
      content: contentRef.current.value,
    };
    setPost(Update);
  }

  return (
    <S.CommentItem>
      <p>
        작성자: <span>{data.User.nickname}</span>
      </p>
      <p>
        {isEditmode ? (<textarea ref={contentRef} defaultValue={data.content}></textarea>) : (<>댓글 내용: <span>{data.content}</span></>)}
      </p>
      <button onClick={() => { deleteComment(data.id) }}>x</button>
      <button onClick={(e) => { isEditmode ? onPressEditMode() : onPressChangeEditMode() }}>{isEditmode ? "완료" : "수정"}</button>
    </S.CommentItem >
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};