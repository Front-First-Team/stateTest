import styled from "styled-components";

function Comment({commentlist}) {
  
    return (
      {
        commentlist.map((comment)=> {
        <S.CommentItem>
        <p>
          작성자: <span>{writer}</span>
        </p>
        <p>
          댓글 내용: <span>예시 내용</span>
        </p>
      </S.CommentItem>
      
      })}
  );
  
    }


// function Comment({nickname, content}) {
//   return (
//     <>
//       <S.CommentItem>
//       <p>
//         작성자: <span>{nickname}</span>
//       </p>
//       <p>
//         댓글 내용: <span>{content}</span>
//       </p>
//       <button>수정</button>
//       <button>삭제</button>
//     </S.CommentItem>
//     </>
//   );
// }
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
