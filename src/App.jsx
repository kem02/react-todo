import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    new Promise((resolve, reject) =>
      setTimeout(() => resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) } }), 2000)
    ).then(result => {
      setTodoList(result.data.todoList);
      setIsLoading(false)
    });


  }, [])


  useEffect(() => {
    if (!isLoading) {
      // localStorage can only store strings. 
      // This means that when you have an array or object that
      // you want to store in localStorage, you need to convert it into a string. 
      const stringTodoList = JSON.stringify(todoList)
      localStorage.setItem('savedTodoList', stringTodoList)
    }

  }, [todoList])

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  const removeTodo = (id) => {
    const newDeletedTodo = todoList.filter((todo) => todo.id !== id)

    setTodoList(newDeletedTodo)
  }

  return (
    <>
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={addTodo} />

      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}


    </>
  )
}

export default App

