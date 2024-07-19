import { useState } from "react";
import styled from "styled-components";
import Comment from "./components/comment";

function State2() {

  const [post, setPost] = useState({
    title: "안녕하세요 여러분 김성용 강사입니다 :)",
    content: "오늘도 모두 화이팅입니다!",
    User: {
      nickname: "김성용",
      age: 20,
      height: 190,
    },
    Comments: [
      {
        id: 1,
        User: {
          nickname: "김사과",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        id: 2,
        User: {
          nickname: "반하나",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        id: 3,
        User: {
          nickname: "오렌지",
        },
        content: "오늘도? 화이팅입니다!",
        myComment: false,
      },
      {
        id: 4,
        User: {
          nickname: "이멜론",
        },
        content: "오늘도?? 화이팅입니다!",
        myComment: false,
      },
      {
        id: 5,
        User: {
          nickname: "박수박",
        },
        content: "오늘도??? 화이팅입니다!",
        myComment: false,
      },
    ],
  });
  // 댓글 추가 로직 
  const addComment = (comment) => {
    const newId = Math.floor(Math.random() * 10000);
    const addComment = { ...post, Comments: [...post.Comments, { ...comment, id: newId }] }
    setPost(addComment);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ content, User: { nickname } });
    setNickname("");
    setContent("");
  }
  const [nickname, setNickname] = useState();
  const [content, setContent] = useState();

  //--------------삭제 -> Comment

  const deleteComment = (id) => {
    const deletepost = { ...post };
    deletepost.Comments = post.Comments.filter((comment) => comment.id !== id)
    setPost(deletepost)
  }


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
      <div>
        <p>
          댓글 수: <span>{post.Comments.length}</span>
        </p>
        <form onSubmit={handleSubmit}>
          <input value={nickname} onChange={(e) => setNickname(e.target.value)} name='nickname' placeholder="작성자" />
          <input value={content} onChange={(e) => setContent(e.target.value)} name='content' placeholder="댓글 내용" />
          <button>댓글 작성</button>
        </form>
      </div>
      <S.CommentList>

        {post.Comments.map((data) => <Comment data={data} post={post} deleteComment={deleteComment} setPost={setPost} />)}

      </S.CommentList>
    </S.Wrapper>
  );
}
export default State2;

// 먼저 추가,삭제 로직을 구현해볼것이다. 중첩객체 배열을 신경쓰며 해보자
// 사용할 상태의 초기값은 정해져있다./
// 먼저 조회를 해보자
//  - S.CommentList>에 데이터를 조회 할것이다 전에 했던 방법과 마찬가지로 map을 사용해 전부 순회할것이고
// 내가 화면에 보일것은 Comment 컴포넌트이다. -> 접근할 데이터를 map을 돌려 Comments의 복사본을 생성후 Comment컴포넌트로 props를 전닳해주자
// 복사본에서 미리 Comments 로접근했기때문에 데이터를 조회할때 Comments접근없이 바로 데이터에 접근하면된다.

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