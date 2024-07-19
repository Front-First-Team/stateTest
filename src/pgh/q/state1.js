import { useRef, useState } from "react";
import PlayListMock from "../__mock__/playList.json";

function State1() {

  const [playList, setPlaylist] = useState(PlayListMock.playlist)

  const SongTitleRef = useRef()
  const SingerRef = useRef()

  const onclickaddNewSong = (event) => {
    event.preventDefault();
    const newsong = {
      id: Math.floor(Math.random() * 10000),
      title: SongTitleRef.current.value,
      signer: SingerRef.current.value,
    }
    setPlaylist([...playList, newsong])
    SongTitleRef.current.value = "";
    SingerRef.current.value = "";
  };

  const DeleteSong = (songId) => {
    const deletesong = playList.filter((song) => song.id !== songId);
    setPlaylist(deletesong)
  }


  return (
    <>
      <h1>문제1</h1>
      <ul>
        {playList.map((song) => (
          <li key={song.id}>
            <h4>{song.title}</h4>
            <p>{song.signer}</p>
            <button onClick={() => DeleteSong(song.id)}>삭제</button>
          </li>
        ))}

      </ul>
      <div>
        <p>
          곡명 : <input ref={SongTitleRef} />
        </p>
        <p>
          가수/작곡 : <input ref={SingerRef} />
        </p>
        <p>
          <button onClick={onclickaddNewSong}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
// 먼저 데이터들이 화면에 렌더링 될수있게 만든다
//  - map을 사용하여 주어진 데이터 전체를 순회하여 가져올것이다.
//  - 조회를 마친후 추가 로직을 구현할것이다 두개의 인풋에서 useref를 통해 인풋 값을 가져올것이다.
// - 그리고 상태로 관리할 데이터 -> PlayListMock.playlist를 상태로 관리할것이다. PlayListMock.playlist를 초기값으로 설정
// - useref를 사용하여 입력값을 가지고 올것이다. useref를 사용하고싶으면 input의 속성값에 ref를 명시해주어야한다.

// 이제 새로운 곡을 추가해주어야한다.
// 새로운 곡을 추가하기 위해 onclickaddNewSong 함수를 만들어줄것이다
// 새로 올라갈 정보의 상수를 작성한다 const newsong = / 그리고 데이터가 객체로 왔기 떄문에 객체 형태로 만들어
// 전개연산자로 이전 정보를 불러와준후 상태함수에 함께 업로드 해줄것이다.

// 삭제 함수를 작성해보자
// 삭제함수는 일단 삭제가 클릭 되었을시 그 클릭된 객체에 해당된 고유 id값을 삭제 함수의 매개변수로 받아줄것이다
// 그리고 playList 상태 배열에 filter를 사용할것이다.filter는 조건에 맞는 모든 요소를 포함하는 새로운 배열을 반환한다.
// 그래서 filter를 통해 전체를 다순회하고 복사본 배열의 song.id와 내가 삭제하려는 곡의 id가 같을떄 복사본 배열에 포함시키지않는것이다
// 그렇게 포함시키지 않은 배열을 다시 set함수에 업로드 하는것이다.
