import React from 'react';
import TodoListItem from './TodoListItem'


// const todoList = [
//     {
//       id: 1,
//       title: 'Setup Github repo'
//     },
//     {
//       id: 2,
//       title: 'Create Vite app'
//     },
//     {
//       id: 3,
//       title: 'Complete assignment'
//     },
//     {
//       id: 4,
//       title: 'Push branch to Github'
//     },
//   ];


const TodoList = ({ todoList }) => {
    return (
        <div>
            <ul>
                {todoList.map((item) => (
                    <TodoListItem key={item.id} todo={item} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;