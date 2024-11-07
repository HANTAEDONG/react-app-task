export type TModalState = {
  boardId: string;
  listId: string;
  task: {
    taskId: string;
    taskName: string;
    taskDescription: string;
    taskOwner: string;
  };
};

export type TLogItem = {
  logId: string;
  logAuthor: string;
  logMessage: string;
  logTimestamp: string;
};
