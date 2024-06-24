import { useRef, useState } from "react";
import PlayListMock from "../__mock__/playList.json";
import styled from "styled-components";


function State1() {

  const newID = useRef();
  const [newTitle, setNewTitle] = useState("")
  const [newSinger, setNewSinger] = useState("")
  //const [newDone,setNewDone] = useState(false)

  const addPlayList = () => {
    const newPlayList = [];
    // newTodoList 배열에 새롭게 받은 PlayList를 추가해준다. 
    const newPlayObj = {
      id: newID.current,
      //current를 통해 생성될 때마다 다른 Id를 부여할 수 있도록 해준다. 
      title: newTitle,
      singer: newSinger,
    }
    //Id값 이전값에 대해 +1씩 하기
    newID.current++;
    newPlayList.push(newPlayObj);
  }
  /* 
    문제 1.
    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */
  return (
    <>
      <h1>문제1</h1>
      <ul>
        {PlayListMock.playlist.map((song) => <li key={song.title}>
          <form style={{
            border: "1px solid #999",
            width: "100%",

            height: " 140px",
          }}
          >
            <h3>{song.title}</h3>
            <p>{song.signer}</p>
            <button>삭제 </button>
          </form>
        </li>)}
      </ul >
      <div>
        <p>
          곡명 : <input className='input' value={newTitle} placeholder="song"
            onChange={(event) => setNewTitle(event.target.value)} />
        </p>
        <p>
          가수/작곡 : <input className='input' value={newSinger} placeholder="singer"
            onChange={(event) => setNewSinger(event.target.value)} />
        </p>
        <p>
          <button onClick={addPlayList} className="cardButton" >추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
