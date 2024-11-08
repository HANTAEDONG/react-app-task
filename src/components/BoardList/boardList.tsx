import { useState } from "react";
import { board } from "../../App.css";
import { useAppSelector } from "../../hooks/redux";
import SideForm from "./SideForm";
import { FiPlusCircle } from "react-icons/fi";

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList = ({ activeBoardId, setActiveBoardId }: TBoardListProps) => {
  const { boardArray } = useAppSelector((state) => state.board);
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div>
      <div>게시판: </div>
      {boardArray.map((board, index) => (
        <div key={board.boardId}>
          <div>{board.boardName}</div>
        </div>
      ))}
      <div>
        {isFormOpen ? (
          <SideForm />
        ) : (
          <FiPlusCircle onClick={() => setIsFormOpen(!isFormOpen)} />
        )}
      </div>
    </div>
  );
};

export default BoardList;
