import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoard, IList, ITask } from "../../types";

type TBoardState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

type TAddBoardAction = {
  board: IBoard;
};

type TDeleteListAction = {
  boardId: string;
  listId: string;
};

type TAddListAction = {
  boardId: string;
  list: IList;
};

type TAddTaskAction = {
  boardId: string;
  listId: string;
  task: ITask;
};

const initialState: TBoardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫 번째 게시물",
      lists: [
        {
          listId: "list-0",
          listName: "List 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "Task 1",
              taskDescription: "Task 1",
              taskOwner: "John",
            },
            {
              taskId: "task-1",
              taskName: "Task 2",
              taskDescription: "Task 2",
              taskOwner: "Han",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "List 2",
          tasks: [
            {
              taskId: "task-2",
              taskName: "Task 3",
              taskDescription: "Task 3",
              taskOwner: "Kim",
            },
          ],
        },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: "Board",
  initialState,
  reducers: {
    addBoard: (state, { payload }: PayloadAction<TAddBoardAction>) => {
      state.boardArray.push(payload.board);
    },
    addList: (state, { payload }: PayloadAction<TAddListAction>) => {
      const board = state.boardArray.find(
        (board) => board.boardId === payload.boardId
      );
      if (board) {
        board.lists.push(payload.list);
      }
    },
    addTask: (state, { payload }: PayloadAction<TAddTaskAction>) => {
      const board = state.boardArray.find(
        (board) => board.boardId === payload.boardId
      );
      if (board) {
        const list = board.lists.find((list) => list.listId === payload.listId);
        if (list) {
          list.tasks.push(payload.task);
        }
      }
    },
    deleteList: (state, { payload }: PayloadAction<TDeleteListAction>) => {
      const board = state.boardArray.find(
        (board) => board.boardId === payload.boardId
      );
      if (board) {
        board.lists = board.lists.filter(
          (list) => list.listId !== payload.listId
        );
      }
    },
    setModalActive: (state, { payload }: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },
  },
});

export const { addBoard, deleteList, setModalActive, addList, addTask } =
  boardSlice.actions;
export const boardReducer = boardSlice.reducer;
