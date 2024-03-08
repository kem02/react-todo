import * as React from 'react';


const todoList = [
    {
      id: 1,
      title: 'Setup Github repo'
    },
    {
      id: 2,
      title: 'Create Vite app'
    },
    {
      id: 3,
      title: 'Complete assignment'
    },
    {
      id: 4,
      title: 'Push branch to Github'
    },
  ];


const TodoList = () => {
    return (
        <div>
            <ul>
                {todoList.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;