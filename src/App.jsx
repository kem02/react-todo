import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './App.module.css'


function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?Default=Grid%20&sort[0][field]=title&sort[0][direction]=asc`;

    try {

      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      // console.log(data);

      data.records.sort((ObjectA,ObjectB) => {

        const titleA = ObjectA.fields.title;
        const titleB = ObjectB.fields.title;

        if (titleA < titleB){
          return -1;
        }
        if (titleA > titleB){
          return 1;
        } 
        if (titleA == titleB){
          return 0
        }
      })

      const todos = data.records.map((todo) => {

        const newTodo = {
          id: todo.id,
          title: todo.fields.title
        }

        return newTodo

      });

      // console.log(todos);

      setTodoList(todos);
      setIsLoading(false);

    } catch (error) {
      console.log(error.message)
    }
  };

  const postTodo = async (todo) => {

    const airtableData = {
      fields: {
        title: todo,
      },
    };

    const options = {
      method: "POST",

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(airtableData),
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default`

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const dataResponse = await response.json();
      // console.log(dataResponse)
      return dataResponse;


    } catch (error) {
      console.log(error.message);
    }


  }


  const deleteTodo = async (id) => {

    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      }
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`

    try {
      const response = await fetch(url, options);

      if (!response.status) {
        throw new Error(`Error: ${response.status}`);
      }

      const dataResponse = await response.json();

      return dataResponse;

    } catch (error) {
      console.log(error.message);
    }

  };

  useEffect(() => {

    fetchData();


  }, []);


  useEffect(() => {
    if (!isLoading) {
      // localStorage can only store strings. 
      // This means that when you have an array or object that
      // you want to store in localStorage, you need to convert it into a string. 
      const stringTodoList = JSON.stringify(todoList)
      localStorage.setItem('savedTodoList', stringTodoList)
    }

  }, [todoList])


  /**
    addTodo function
    This function adds a new todo item to the todo list.
    It's an async function because it needs to wait for the response from the Airtable API
    before it can update the todo list with the new item.
    
    @param {string} newTodo - The title of the new todo to be added.
  */
  const addTodo = async (newTodo) => {
    // Sends the new todo to Airtable and waits for the response
    const postResult = await postTodo(newTodo);
    // Create a new todo object using the id and title from the Airtable response
    const newTodoObject = {
      "id": postResult.id,
      "title": postResult.fields.title,
    }
    // Updates the todo list state with the new todo object
    setTodoList([...todoList, newTodoObject])
  }

  const removeTodo = (id) => {
    deleteTodo(id)
    const newDeletedTodo = todoList.filter((todo) => todo.id !== id)

    setTodoList(newDeletedTodo)
  }

  const NextPage = () => (
    <div className={style.nextPage}>
      <h1>New Todo List Under Construction</h1>
    </div>
  )
  /* 
    Can also use jsx element instead of component:

    const nextPage = (
      <div className={style.nextPage}>
        <h1>New Todo List Under Construction</h1>
      </div>
    );

  */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className={style.parentContainer}>
            <h1>Simple Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
          </div>
        } />
        <Route path="/new" element={<NextPage/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App

