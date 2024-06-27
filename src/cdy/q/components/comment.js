import styled from "styled-components";

function Comment({ comment }) {
  console.log("넘어오는 값 : ", comment);

  return (
    <S.CommentItem>
      <p>
        작성자: <span>{comment.User.nickname}</span>
      </p>
      <p>
        댓글 내용: <span>{comment.content}</span>
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
