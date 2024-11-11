import {
  ChangeEvent,
  ReactElement,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { FiCheck } from "react-icons/fi";
import { icon, input, sideForm } from "./SideForm.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addBoard } from "../../../store/slices/boardSlice";
import { v4 as uuidv4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";

type TSideFormProps = {
  setIsFormOpen: React.Dispatch<SetStateAction<boolean>>;
};

const SideForm = ({ setIsFormOpen }: TSideFormProps) => {
  const [InputText, SetInputText] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    SetInputText(e.target.value);
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFormOpen(false);
  };
  const handleClick = () => {
    if (InputText) {
      dispatch(
        addBoard({
          board: { boardId: uuidv4(), boardName: InputText, lists: [] },
        })
      );
      dispatch(
        addLog({
          logId: uuidv4(),
          logMessage: `게시판 등록: ${InputText}`,
          logAuthor: "user",
          logTimestamp: String(Date.now()),
        })
      );
    }
  };
  return (
    <div className={sideForm}>
      <input
        className={input}
        type="text"
        placeholder="새로운 게시판 등록하기"
        onChange={handleChange}
        onBlur={handleBlur}
        autoFocus
      />
      <FiCheck className={icon} onMouseDown={handleClick} />
    </div>
  );
};

export default SideForm;
