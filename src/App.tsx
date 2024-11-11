import { useState } from "react";
import { appContainer, board, buttons } from "./App.css";
import { IBoard } from "./types";
import BoardList from "./components/BoardList/BoardList";
import ListContainer from "./components/ListContainer/ListContainer";
import { useAppSelector } from "./hooks/redux";

const App = () => {
  const [activeBoardId, setActiveBoardId] = useState<string>("board-0");
  const boards = useAppSelector((state) => state.board.boardArray);
  const activeBoard: IBoard = boards.filter(
    (board) => board.boardId === activeBoardId
  )[0];
  const { lists } = activeBoard;
  return (
    <div className={appContainer}>
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />
      <div className={board}>
        <ListContainer lists={lists} boardId={activeBoard.boardId} />
      </div>
      <div className={buttons}>
        <button>이 게판 삭제하기</button>
        <button>활동 목록 보이기</button>
      </div>
    </div>
  );
};

export default App;
