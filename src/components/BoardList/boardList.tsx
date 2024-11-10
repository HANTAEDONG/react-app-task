import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import SideForm from "./SideForm";
import { FiPlusCircle } from "react-icons/fi";
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  title,
} from "./BoardList.css";
import clsx from "clsx";

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList = ({ activeBoardId, setActiveBoardId }: TBoardListProps) => {
  const { boardArray } = useAppSelector((state) => state.board);
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className={container}>
      <div className={title}>게시판: </div>
      {boardArray.map((board, index) => (
        <div
          key={board.boardId}
          onClick={() => setActiveBoardId(boardArray[index].boardId)}
          className={clsx(
            {
              [boardItemActive]:
                boardArray.findIndex((b) => b.boardId === activeBoardId) ===
                index,
            },
            {
              [boardItem]:
                boardArray.findIndex((b) => b.boardId === activeBoardId) !==
                index,
            }
          )}
        >
          <div>{board.boardName}</div>
        </div>
      ))}
      <div className={addSection}>
        {isFormOpen ? (
          <SideForm />
        ) : (
          <FiPlusCircle
            className={addButton}
            onClick={() => setIsFormOpen(!isFormOpen)}
          />
        )}
      </div>
    </div>
  );
};

export default BoardList;
