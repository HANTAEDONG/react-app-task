import { IList } from "../../types";
import ActionButton from "../ActionButton/ActionButton";
import List from "../List/List";
import { ListsContainer } from "./ListContainer.css";

type TListContainerProps = {
  lists: IList[];
  boardId: string;
};

const ListContainer = ({ lists, boardId }: TListContainerProps) => {
  return (
    <div className={ListsContainer}>
      {lists.map((list, index) => (
        <List key={list.listId} list={list} boardId={boardId} />
      ))}
      <ActionButton boardId={boardId} listId={""} />
    </div>
  );
};

export default ListContainer;
