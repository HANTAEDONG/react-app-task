import { IList } from "../../types";
import ActoinButton from "../ActionButton/ActoinButton";
import List from "./List";
import { ListsContainer } from "./ListContainr.css";

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
      <ActoinButton />
    </div>
  );
};

export default ListContainer;
