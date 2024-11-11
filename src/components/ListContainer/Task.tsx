import React from "react";

type TTaskProps = {
  taskName: string;
  taskDescription: string;
  boardId: string;
  id: string;
  index: number;
};

const Task = ({
  taskName,
  taskDescription,
  boardId,
  id,
  index,
}: TTaskProps) => {
  return <div>Task</div>;
};

export default Task;
