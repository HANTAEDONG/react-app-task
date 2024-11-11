import React from "react";
import { IList, ITask } from "../../types";
import { GrSubtract } from "react-icons/gr";
import Task from "./Task";
import ActoinButton from "../ActionButton/ActoinButton";
import { useAppDispatch } from "../../hooks/redux";
import ActionButton from "../ActionButton/ActoinButton";
import { deleteList, setModalActive } from "../../store/slices/boardSlice";
import { v4 } from "uuid";
import { addLog } from "../../store/slices/loggerSlice";
import { setModalData } from "../../store/slices/modalSlice";

type TListProp = {
  list: IList;
  boardId: string;
};

const List = ({ list, boardId }: TListProp) => {
  const dispatch = useAppDispatch();
  const handleListDelete = (listId: string) => {
    dispatch(deleteList({ boardId, listId }));
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `리스트 삭제하기: ${list.listName}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
  };
  const handleTaskChange = (
    boardId: string,
    listId: string,
    taskId: String,
    task: ITask
  ) => {
    dispatch(
      setModalData({
        boardId,
        listId,
        task,
      })
    );
    dispatch(setModalActive(true));
  };
  return (
    <div>
      <div>{list.listName}</div>
      <GrSubtract onClick={() => handleListDelete(list.listId)} />
      {list.tasks.map((task, index) => (
        <div
          key={task.taskId}
          onClick={() =>
            handleTaskChange(boardId, task.taskId, list.listId, task)
          }
        >
          <Task
            taskName={task.taskName}
            taskDescription={task.taskDescription}
            boardId={boardId}
            id={task.taskId}
            index={index}
          />
        </div>
      ))}
      <ActionButton />
    </div>
  );
};

export default List;
