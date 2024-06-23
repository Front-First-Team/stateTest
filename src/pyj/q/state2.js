import { useState } from "react";
import styled from "styled-components";
import Comment from "./components/comment";

const State2 = () => {
    /*  
    문제 2.

    Q1. 아래 작성된 state의 mock data를 활용하여
        댓글 목록을 화면에 랜더링 해보세요 :)
        Components는 src/components/state/comment.js를 활용하세요
        src\q\components\comment.js
        
    Q2. 댓글 작성 수정 삭제 기능을 구현해보세요 :)
            1. 댓글 작성 기능
            2. 댓글 수정 기능
            3. 댓글 삭제 기능 ( 본인이 작성한 댓글만 삭제할 수 있습니다, myComment 활용 )
  */


  // 초기 포스트 데이터 설정
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
        User: {
          nickname: "김사과",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "반하나",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "오렌지",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "이멜론",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "박수박",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
    ],
  });

  // 댓글 입력 데이터 설정
  const [commentData, setCommentData] = useState({
    nickname: "",
    content: "",
  });

  // 입력 필드 변경 핸들러
  // 사용자가 입력 필드에 값을 입력할 때 호출되며, commentData 상태를 업데이트
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setCommentData({...commentData, [name]: value});
  };

  // 댓글 추가 핸들러
  // 사용자가 "댓글 작성" 버튼을 클릭할 때 호출되며, commentData 상태를 업데이트
  const handleAddComment = () => {
    const newContent = {
      User: {
        nickname: commentData.nickname,
      },
      content: commentData.content,
      myComment: true,
    }; 

    // 기존 댓글 목록에 새 댓글을 추가하여 상태 업데이트
    setPost({...post, Comments: [...post.Comments, newContent]});
    // 입력 필드 초기화
    setCommentData({nickname: "", content: ""});
  };

  // 댓글 삭제 핸들러
  // 특정 댓글의 삭제 버튼을 클릭할 때 호출되며, 해당 댓글을 post 상태에서 제거
  const handleDeleteComment = (index) => {
    const updatedComments = post.Comments.filter((_, i) => i !== index);
    setPost({ ...post, Comments: updatedComments });
  };

  // 댓글 수정 핸들러
  // 특정 댓글의 수정 기능을 통해 새로운 내용으로 업데이트할 때 호출됨
  const handleUpdateComment = (index, newContent) => {
    const updatedComments = post.Comments.map((comment, i) => {
      if (i === index) {
        return {...comment, content: newContent};
      }
      return comment;
    });
    setPost({...post, Comments: updatedComments });
  };

  return (
    <S.Container>
      <h1>문제2</h1>
      <S.PostArea>
        <S.PostTitle>제목: {post.title}</S.PostTitle>
        <S.PostContent>내용: {post.content}</S.PostContent>
      </S.PostArea>
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
        <input
          name="nickname"
          value={commentData.nickname}
          onChange={handleInputChange}
          placeholder="작성자"
        />
        <input
          name="content"
          value={commentData.content}
          onChange={handleInputChange}
          placeholder="댓글 내용"
        />
        <button onClick={handleAddComment}>댓글 작성</button>
      </div>
      <S.CommentList>
        {/* 댓글 목록 렌더링 */}
        {post.Comments.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
            onDelete={() => handleDeleteComment(index)}
            onUpdate={(newContent) => handleUpdateComment(index, newContent)}
          />
        ))}
      </S.CommentList>
    </S.Container>
  );
};

export default State2;

// 스타일드 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostArea = styled.div`
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
  Container,
  PostArea,
  PostTitle,
  PostContent,
  PostInfo,
  CommentList,
};
