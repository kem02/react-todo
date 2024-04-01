import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
  // JSON.parse converts the string back into an array, which is the expected format for todoList state.
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
  );
  // console.log(typeof todoList)

  useEffect(() => {
    // localStorage can only store strings. 
    // This means that when you have an array or object that
    // you want to store in localStorage, you need to convert it into a string. 
    const stringTodoList = JSON.stringify(todoList)
    localStorage.setItem('savedTodoList', stringTodoList)
  }, [todoList])

  return [todoList, setTodoList]
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState()

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  return (
    <>
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>{newTodo}</p> */}
      <TodoList todoList={todoList} />

    </>
  )
}

export default App
