import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITask, TModalState } from "../../types";

type TSetModalDataAction = {
  boardId: string;
  listId: string;
  task: ITask;
};

const initialState: TModalState = {
  boardId: "board-0",
  listId: "list-0",
  task: {
    taskId: "task-0",
    taskName: "task 0",
    taskDescription: "task Description",
    taskOwner: "John",
  },
};

// `createSlice`의 반환 값을 변수에 저장
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData: (state, { payload }: PayloadAction<TSetModalDataAction>) => {
      state.boardId = payload.boardId;
      state.listId = payload.listId;
      state.task = payload.task;
    },
  },
});

const modalReducer = modalSlice.reducer;

export const { setModalData } = modalSlice.actions;
export default modalReducer;
