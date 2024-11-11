import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TLogItem } from "../../types";

type loggerState = {
  logArray: TLogItem[];
};

const initialState: loggerState = {
  logArray: [],
};

const loggerSlice = createSlice({
  name: "Logger",
  initialState,
  reducers: {
    addLog: (state, { payload }: PayloadAction<TLogItem>) => {
      state.logArray.push();
    },
  },
});

export const { addLog } = loggerSlice.actions;
export const loggerReducer = loggerSlice.reducer;
