import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  
const [ todoList, setTodoList ] = useState([])

const addTodo = (newTodo) => {
  setTodoList([...todoList, newTodo])
}

  return (
    <div>
      <h1>Todo List</h1>

    <AddTodoForm onAddTodo={addTodo} />
    {/* <p>{newTodo}</p> */}
     <TodoList todoList={todoList} />

    </div>
  )
}

export default App
