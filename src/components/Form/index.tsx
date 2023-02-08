import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../shared/redux/slicers/todoSlicer";
import "./Form.css"

export default function Form() {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    dispatch(addTodo(title))
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text" value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ir ao mercado.."
        maxLength={40}
        minLength={3}
        required
      />
      <button>Adicionar</button>
    </form>
  );
}