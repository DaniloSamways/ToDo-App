import { useSelector } from "react-redux";
import { RootState } from "../../shared/redux/store";
import TodoRow from "../TodoRow";
import "./TodoList.css"

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.value)
  return (
    <div className="list">
      {todos.map((todo, index) => (
        <>
          <TodoRow todo={{ ...todo, id: index }} />
        </>
      ))}
    </div>
  );
}