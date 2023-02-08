import { useDispatch } from "react-redux";
import IconTrashFill from "../../assets/icons/IconTrashFill";
import { removeTodo, toggleTodo } from "../../shared/redux/slicers/todoSlicer";
import "./TodoRow.css"

interface TodoRowProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  }
}

export default function TodoRow({ todo }: TodoRowProps) {
  const dispatch = useDispatch()

  const handleCompleted = () => {
    dispatch(toggleTodo(todo.id))
  }

  return (
    <div className="todo">
      <div className="left-items">
        <input onChange={handleCompleted} type="checkbox" checked={todo.completed} />
        <p>{todo.title}</p>
      </div>
      <button onClick={() => dispatch(removeTodo(todo.id))}>
        <IconTrashFill />
      </button>
    </div>
  );
}