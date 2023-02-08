import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

export interface StateProps {
  value: Array<TodoProps>;
}

const initialState: StateProps = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state: StateProps, action: PayloadAction<string>) => {
      const title = action.payload
      const todosLength = state.value.length
      state.value.push({
        id: todosLength,
        title,
        completed: false
      })
    },
    removeTodo: (state: StateProps, action: PayloadAction<number>) => {
      const id = action.payload
      const todoIndex = state.value.findIndex((todo) => todo.id === id)
      state.value.splice(todoIndex, 1)
    },
    toggleTodo: (state: StateProps, action: PayloadAction<number>) => {
      const id = action.payload
      const todoIndex = state.value.findIndex((todo) => todo.id === id)
      const todo = state.value[todoIndex]
      const updatedTodo = { ...todo, completed: !todo.completed }
      state.value[todoIndex] = updatedTodo;
    }
  }
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer