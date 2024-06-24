import PlayListMock from "../__mock__/playList.json";
import React, {useState} from "react"

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  // console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  //----------------------------------------------------------
  // 상태 생성 / id 추가 :
  const plusIdList = PlayListMock.playlist.map((list) => ({
    ...list, id: Math.floor(Math.random() * 10000000)
  }))

  const [playList, setPlayList] = useState(plusIdList)

  //----------------------------------------------------------
  // 삭제 :
  const onPressDeleteList = (listId) => {
    const deleteList = playList.filter((list) => list.id !== listId)
    setPlayList(deleteList)
  }

  //----------------------------------------------------------
  // 추가 :
  const onPressAddList = (event) => {
    event.preventDefault()
    const titleValue = event.target.title.value
    const singerValue = event.target.singer.value

    if(!titleValue.trim() || !singerValue.trim) return

    const newList = {
      title: titleValue,
      signer: singerValue,
      id: Math.floor(Math.random() * 10000000)
    }
    
    setPlayList([...playList, newList])
    event.target.title.value = ""
    event.target.singer.value = ""
  }
  
  //----------------------------------------------------------

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터 */}
        <li>
          {/* <h3>Summer</h3> */}
          {/* <p>Joe Hisaishi</p> */}
          {/* <button>삭제 </button> */}

          {
            playList.map((list) => <React.Fragment key={list.id}>
              <h3>{list.title}</h3>
              <p>{list.signer}</p>
              <button onClick={() => onPressDeleteList(list.id)}>삭제</button>
            </React.Fragment>)
          }

        </li>
      </ul>
      <form onSubmit={onPressAddList}>
        <p>
          곡명 : <input name="title"/>
        </p>
        <p>
          가수/작곡 : <input name="singer"/>
        </p>
        <p>
          <button type="submit">추가</button>
        </p>
      </form>
    </>
  );
}
export default State1;
