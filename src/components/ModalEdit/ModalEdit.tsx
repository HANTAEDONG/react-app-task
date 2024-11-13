import { FiX } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useState } from "react";
import {
  deleteTask,
  setModalActive,
  updateTask,
} from "../../store/slices/boardSlice";
import { TModalState } from "../../types";
import { addLog } from "../../store/slices/loggerSlice";
import { v4 } from "uuid";

const ModalEdit = () => {
  const dispatch = useAppDispatch();
  const editingState = useAppSelector((state) => state.modal);
  const [data, SetData] = useState(editingState);
  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  };
  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    SetData((prev) => ({
      ...prev,
      task: {
        ...prev.task,
        [name]: value,
      },
    }));
  };
  const handleUpdate = () => {
    dispatch(
      updateTask({
        boardId: data.boardId, // 수정된 데이터 사용
        listId: data.listId,
        task: data.task,
      })
    );
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Task updated: ${data.task.taskName}`,
        logAuthor: "User",
        logTimestamp: new Date().toISOString(), // 가독성 있는 타임스탬프
      })
    );
    dispatch(setModalActive(false));
  };

  const handleDelete = () => {
    dispatch(
      deleteTask({
        boardId: data.boardId, // 수정된 데이터 사용
        listId: data.listId,
        taskId: data.task.taskId,
      })
    );
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Task deleted: ${data.task.taskName}`,
        logAuthor: "User",
        logTimestamp: new Date().toISOString(),
      })
    );
    dispatch(setModalActive(false));
  };

  return (
    <div>
      <div>
        <div>
          <div>{editingState.task.taskName}</div>
          <FiX onClick={handleCloseButton} />
          <div>제목</div>
          <input
            type="text"
            name="taskName"
            value={data.task.taskName}
            onChange={handleDataChange}
          />
          <div>설명</div>
          <input
            type="text"
            name="taskDescription"
            value={data.task.taskDescription}
            onChange={handleDataChange}
          />
          <div>생성한 사람</div>
          <input
            type="text"
            name="taskOwner"
            value={data.task.taskOwner}
            onChange={handleDataChange}
          />
          <div>
            <button onClick={handleUpdate}>수정하기</button>
            <button onClick={handleDelete}>삭제하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
