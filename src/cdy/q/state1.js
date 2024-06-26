import { useState, useRef } from "react";
import PlayListMock from "../__mock__/playList.json";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  const [playlist, setPlaylist] = useState(PlayListMock.playlist);

  const songTitle = useRef();
  const singer = useRef();

  const onClickAddNewSong = () => {
    const newSong = {
      title: songTitle.current.value,
      signer: singer.current.value,
    };
    console.log("새로 들어온 정보 : ", newSong);
    setPlaylist([...playlist, newSong]);
    console.log(playlist);
  };

  const onClickDelete = (songTitle) => {
    const deletedPlaylist = playlist.filter((song) => song.title !== songTitle);
    setPlaylist(deletedPlaylist);
    console.log(playlist);
  };

  /* value를 전달해주는 방법 두가지
  1. form 
  2. ref로 보내기
   */

  return (
    <>
      <h1>문제1</h1>
      <div>
        {playlist.map((song, index) => (
          <ul key={index}>
            <li>
              <h3>{song.title}</h3>
              <p>{song.signer}</p>
              <button onClick={() => onClickDelete(song.title)}>삭제</button>
            </li>
          </ul>
        ))}
      </div>
      <ul>
        <li>
          <h3>Summer</h3>
          <p>Joe Hisaishi</p>
          <button onClick={onClickDelete}>삭제 </button>
        </li>
      </ul>
      <div>
        <p>
          곡명 : <input ref={songTitle} />
        </p>
        <p>
          가수/작곡 : <input ref={singer} />
        </p>
        <p>
          <button onClick={onClickAddNewSong}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
