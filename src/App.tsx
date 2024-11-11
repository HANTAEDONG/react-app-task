import { useState } from "react";
import { appContainer, board, buttons } from "./App.css";
import { IBoard } from "./types";
import BoardList from "./components/BoardList/BoardList";

const App = () => {
  const [activeBoardId, setActiveBoardId] = useState<string>("board-0");
  return (
    <div className={appContainer}>
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />
      <div className={board}></div>
      <div className={buttons}>
        <button>이 게판 삭제하기</button>
        <button>활동 목록 보이기</button>
      </div>
    </div>
  );
};

export default App;
