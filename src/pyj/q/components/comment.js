// import styled from "styled-components";

// function Comment() {
//   return (
//     <S.CommentItem>
//       <p>
//         작성자: <span>예시 이름</span>
//       </p>
//       <p>
//         댓글 내용: <span>예시 내용</span>
//       </p>
//     </S.CommentItem>
//   );
// }
// export default Comment;

// const CommentItem = styled.li`
//   border: 1px solid #000;
//   margin: 10px;
// `;

// const S = {
//   CommentItem,
// };

import React, { useState } from "react";
import styled from "styled-components";

const Comment = ({ comment, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(comment.content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(newContent);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewContent(comment.content);
  };

  return (
    <S.CommentItem>
      <p>
        작성자: <span>{comment.User.nickname}</span>
      </p>
      <p>
        댓글 내용:{" "}
        {isEditing ? (
          <input
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
        ) : (
          <span>{comment.content}</span>
        )}
      </p>
      {comment.myComment && (
        <div>
          {isEditing ? (
            <>
              <button onClick={handleSaveClick}>저장</button>
              <button onClick={handleCancelClick}>취소</button>
            </>
          ) : (
            <>
              <button onClick={handleEditClick}>수정</button>
              <button onClick={onDelete}>삭제</button>
            </>
          )}
        </div>
      )}
    </S.CommentItem>
  );
};

export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
