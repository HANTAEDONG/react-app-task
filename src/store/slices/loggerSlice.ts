import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});

export const loggerReducer = loggerSlice.reducer;
