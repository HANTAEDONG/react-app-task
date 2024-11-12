import { FiX } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useState } from "react";
import { setModalActive } from "../../store/slices/boardSlice";

const ModalEdit = () => {
  const dispatch = useAppDispatch();
  const editingState = useAppSelector((state) => state.modal);
  const [data, SetData] = useState(editingState);
  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  };
  return (
    <div>
      <div>
        <div>
          <div>{editingState.task.taskName}</div>
          <FiX onClick={handleCloseButton} />
          <div>제목</div>
          <input type="text" value={data.task.taskName} />
          <div>설명</div>
          <input type="text" value={data.task.taskDescription} />
          <div>생성한 사람</div>
          <input type="text" value={data.task.taskOwner} />
          <div>
            <button>수정하기</button>
            <button>삭제하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
