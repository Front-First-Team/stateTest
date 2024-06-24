import { useRef, useState } from "react";
import styled from "styled-components";

function Comment({writer, writeComment, onPressDeleteComment, dataId,
  newPost, setNewPost, state
}) {

  //-----------------------------------------------------------------------------------
  // 수정 :
  const [isEditMode, setIsEditMode] = useState(false)
  const contentRef = useRef()

  const onEditMode = () => {
    setIsEditMode(true)
  }
  const completeEditMode = () => {
    setIsEditMode(false)

    const content = contentRef.current.value

    const tempPost = {...newPost}
    const selectedPost = newPost.Comments.findIndex((data) => data.id === dataId)
    tempPost.Comments[selectedPost] = {
      ...tempPost.Comments[selectedPost],
      content
    }

    setNewPost(tempPost)
  }
  //-----------------------------------------------------------------------------------

  return (
    <S.CommentItem>
      <p>
        {/* 작성자: <span>예시 이름</span> */}
        작성자: <span>{writer}</span>
      </p>
      <p>
        {/* 댓글 내용: <span>예시 내용</span> */}
        {isEditMode ? <textarea ref={contentRef} defaultValue={writeComment}></textarea> :  <>댓글 내용: <span>{writeComment}</span></>}
        {/* 댓글 내용: <span>{writeComment}</span> */}
      </p>
      <p>
        <button onClick={isEditMode ? completeEditMode : onEditMode}>{isEditMode ? "완료" : "수정"}</button>
        {state && <button onClick={() => onPressDeleteComment(dataId)}>삭제</button>}
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

// onPressEditComment(dataId)