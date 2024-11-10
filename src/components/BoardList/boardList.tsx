import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import SideForm from "./SideForm";
import { FiPlusCircle } from "react-icons/fi";
import { addButton, addSection, container, title } from "./BoardList.css";

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList = ({ activeBoardId, setActiveBoardId }: TBoardListProps) => {
  // redux에서 보드의 상태가져오기
  const { boardArray } = useAppSelector((state) => state.board);
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className={container}>
      <div className={title}>게시판: </div>
      {boardArray.map((board) => (
        <div key={board.boardId}>
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
