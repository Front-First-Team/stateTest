import React, { useState } from 'react';
import PlayListMock from "../__mock__/playList.json";

const State1 = () => {
    /*
        문제 1.
    
        state를 다루기 위한 기초 문제입니다.
        음악 목록 10가지의 mock data가 있습니다.
    
        아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
        삭제 버튼을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
    */
    console.log(PlayListMock.playlist);
    /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

    // mock JSON에서 가져온 플레이리스트 데이터로 state 초기화
    const [playlist, setPlaylist] = useState(PlayListMock.playlist);
    const [newTitle, setNewTitle] = useState('');
    const [newSigner, setNewSigner] = useState('');

    // 새로운 곡을 플레이리스트에 추가하는 함수
    const handleAddSong = () => {
        const newSong = { title: newTitle, signer: newSigner };
        setPlaylist([...playlist, newSong]);
        setNewTitle(''); // 추가 후 입력 필드 초기화
        setNewSigner(''); // 추가 후 입력 필드 초기화
    };

    // 플레이리스트에서 곡을 삭제하는 함수
    const handleRemoveSong = (index) => {
        const updatedPlaylist = playlist.filter((_, i) => {
            return i !== index;
        });
        setPlaylist(updatedPlaylist);
    };

    return (
        <>
            <h1>문제1</h1>
            <ul>
                {/* list */}
                {/* 예시 데이터 */}
                {/* 플레이리스트를 순회하며 각 곡을 표시 */}
                {playlist.map((song, index) => {
                    return (
                        <li key={index}>
                            <h3>{song.title}</h3>
                            <p>{song.signer}</p>
                            <button onClick={() => { return handleRemoveSong(index); }}>삭제</button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <p>
                    곡명 : <input value={newTitle} onChange={(e) => { return setNewTitle(e.target.value); }} />
                </p>
                <p>
                    가수/작곡 : <input value={newSigner} onChange={(e) => { return setNewSigner(e.target.value); }} />
                </p>
                <p>
                    <button onClick={handleAddSong}>추가</button>
                </p>
            </div>
        </>
    );
};

export default State1;