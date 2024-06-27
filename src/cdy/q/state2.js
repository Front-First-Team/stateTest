import { useState } from "react";
import styled from "styled-components";
import Comment from "./components/comment";
import Comments from "../__mock__/comments.json";

function State2() {
  /*  
    문제 2.

    Q1. 아래 작성된 state의 mock data를 활용하여
        댓글 목록을 화면에 랜더링 해보세요 :)
        Components는 src/components/state/comment.js를 활용하세요
        
    Q2. 댓글 작성 수정 삭제 기능을 구현해보세요 :)
            1. 댓글 작성 기능
            2. 댓글 수정 기능
            3. 댓글 삭제 기능 ( 본인이 작성한 댓글만 삭제할 수 있습니다, myComment 활용 )
    */

  const [post, setPost] = useState({
    title: "안녕하세요 여러분 김성용 강사입니다 :)",
    content: "오늘도 모두 화이팅입니다!",
    User: {
      nickname: "김성용",
      age: 20,
      height: 190,
    },
    Comments,
  });

  const [commentlist, setCommentlist] = useState(Comments.Comments);

  console.log("기존 댓글 : ", commentlist);

  const onClickAddComment = (event) => {
    if (!event.target.writer.value && !event.target.content.value) {
      alert("값을 입력해주세요");
      event.preventDefault();
      return;
    }

    event.preventDefault();

    const newComment = {
      User: {
        nickname: event.target.writer.value, //form의 onSubmit만 가능
      },
      content: event.target.content.value,
      myComment: false,
    };
    setCommentlist([...commentlist, newComment]);
    console.log("setComment이후 : ", commentlist);
  };

  return (
    <S.Wrapper>
      <h1>문제2</h1>
      <S.PostBox>
        <S.PostTitle>제목: {post.title}</S.PostTitle>
        <S.PostContent>내용: {post.content}</S.PostContent>
      </S.PostBox>
      <S.PostInfo>
        <p>
          작성자: <span>{post.User.nickname}</span>
        </p>
        <p>
          작성자 나이: <span>{post.User.age}</span>
        </p>
        <p>
          작성자 키: <span>{post.User.height}</span>
        </p>
      </S.PostInfo>
      <form onSubmit={onClickAddComment}>
        <p>
          댓글 수: <span>{post.Comments.length}</span>
        </p>
        <input placeholder="작성자" name="writer" />
        <input placeholder="댓글 내용" name="content" />
        <button>댓글 작성</button>
      </form>
      <S.CommentList>
        <p>이건보여</p>
        {commentlist.map((comment, index) => {
          console.log("넘어가기전 :", comment);
          return <Comment comment={comment} key={index} />;
        })}
        {/* switch/for문 사용하고 싶을 경우
        
        {() => {for(let i = 0 ; i < commentlist.length ; i++){
          return '';
        }}} */}
      </S.CommentList>
    </S.Wrapper>
  );
}
export default State2;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostBox = styled.div`
  background-color: #999;
  width: 360px;
  padding: 10px;
`;

const PostTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const PostContent = styled.p`
  color: #fff;
`;

const PostInfo = styled.div`
  width: 360px;
  border: 3px solid #f00;
  padding: 10px;
  margin: 10px;

  p {
    display: flex;
    justify-content: space-around;
  }

  span {
    font-weight: bold;
  }
`;

const CommentList = styled.ul`
  width: 960px;
`;

const S = {
  Wrapper,
  PostBox,
  PostTitle,
  PostContent,
  PostInfo,
  CommentList,
};
