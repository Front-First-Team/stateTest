import State1 from "../q/state1";
import State2 from "../q/state2";
import State3 from "../q/state3";
import PlayListMock from "../__mock__/playList.json";
import { useState } from "react";


// const PlaylistMockData = PlayListMock.playlist.map((l) => ({
//   ...l, id: Math.floor(Math.random() * 100000)
// }))

function StatesPage() {
  // const [addPlayList, setaddPlaylist] = useState(PlaylistMockData)

  return (
    <div>
      <State1 />
      <hr />
      <State2 />
      <hr />
      <State3 />
      <hr />
    </div>
  );
}
export default StatesPage;
