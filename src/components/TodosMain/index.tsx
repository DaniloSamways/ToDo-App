import Form from "../Form";
import TodoList from "../TodoList";
import "./TodosMain.css"

export default function TodosMain() {
  return (
    <div className="main">
      <Form />
      <TodoList />
    </div>
  );
}