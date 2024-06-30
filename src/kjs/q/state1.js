import PlayListMock from "../__mock__/playList.json";
import {useState} from "react"

function State1() {

  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  //---------------------------------------------------------------------------------
  // playList 상태 생성 :
  const [playList, setPlayList] = useState(PlayListMock.playlist.map((list) => ({
    ...list,
    id: Math.floor(Math.random() * 1000000)
  })))

  //---------------------------------------------------------------------------------
  // 추가 버튼 :
  const onPressNewList = (event) => {
    event.preventDefault()
    const {title, singer} = event.target

    if(!title.value.trim() || !singer.value.trim()) return alert('곡명과 가수명을 입력해주세요')

    const newList = {
      id: Math.floor(Math.random() * 1000000),
      title: title.value,
      signer: singer.value
    }
    setPlayList([...playList, newList])

    title.value = ""
    singer.value = ""
  }

  //---------------------------------------------------------------------------------
  // 삭제 버튼 :
  const onPressDeleteList = (listId) => {
    const deleteList = playList.filter((list) => list.id !== listId)
    setPlayList(deleteList)
  }

  //---------------------------------------------------------------------------------

  return (
    <>
      <h1>문제1</h1>
      <ul>

        {playList.map((list) => <li key={list.id}>
          <h3>{list.title}</h3>
          <p>{list.signer}</p>
          <button onClick={() => onPressDeleteList(list.id)}>삭제</button>
        </li>)}

      </ul>
      <form onSubmit={onPressNewList}>
        <p>
          곡명 : <input name="title" />
        </p>
        <p>
          가수/작곡 : <input name="singer" />
        </p>
        <p>
          <button>추가</button>
        </p>
      </form>
    </>
  );
}
export default State1;
