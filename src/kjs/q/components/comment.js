import { useRef, useState } from "react";
import styled from "styled-components";

function Comment({data, post, setPost}) {

  //---------------------------------------------------------------------------------
  // 삭제 :
  const deletePostBtn = (userId) => {
    const deletePost = {...post}
    deletePost.Comments = post.Comments.filter((data) => data.User.nickname !== userId)
    setPost(deletePost)
  }

  //---------------------------------------------------------------------------------
  // 수정 :
  const [isEdit, setIsEdit] = useState(false)
  const contentRef = useRef()

  const onPressOnEditMode = () => {
    setIsEdit(true)
  }
  
  const onPressOffEditMode = () => {
    setIsEdit(false)
    const editPost = {...post}
    const dataId = data.User.nickname
    const selectedIndex = post.Comments.findIndex((data) => data.User.nickname === dataId)
    editPost.Comments[selectedIndex] = {
      ...editPost.Comments[selectedIndex],
      content: contentRef.current.value
    }
    setPost(editPost)
  }

  //---------------------------------------------------------------------------------

  return (
    <S.CommentItem>
      <p>
        작성자: <span>{data.User.nickname}</span>
      </p>
      <p>
        {isEdit ? <textarea ref={contentRef} defaultValue={data.content}></textarea> : <>댓글 내용: <span>{data.content}</span></>}
      </p>
      <p>
        <button onClick={isEdit ? onPressOffEditMode : onPressOnEditMode}>{isEdit ? "완료" : "수정"}</button>
        {data.myComment && <button onClick={() => deletePostBtn(data.User.nickname)}>삭제</button>}
      </p>
    </S.CommentItem>
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
