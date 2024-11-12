import React from "react";
import { IList, ITask } from "../../types";
import { GrSubtract } from "react-icons/gr";

import { useAppDispatch } from "../../hooks/redux";

import { deleteList, setModalActive } from "../../store/slices/boardSlice";
import { v4 } from "uuid";
import { addLog } from "../../store/slices/loggerSlice";
import { setModalData } from "../../store/slices/modalSlice";
import Task from "../Task/Task";
import { ListWrapper, deleteButton, header, name } from "./List.css";
import ActionButton from "../ActionButton/ActionButton";

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
    <div className={ListWrapper}>
      <div className={header}>
        <div className={name}>{list.listName}</div>
        <GrSubtract
          className={deleteButton}
          onClick={() => handleListDelete(list.listId)}
        />
      </div>
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
      <ActionButton boardId={boardId} listId={list.listId} list />
    </div>
  );
};

export default List;
