import { createSlice } from "@reduxjs/toolkit";
import { TModalState } from "../../types";

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
  reducers: {},
});

const modalReducer = modalSlice.reducer;

export default modalReducer;
