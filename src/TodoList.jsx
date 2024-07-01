import React from 'react';
import TodoListItem from './TodoListItem'
import style from './TodoList.module.css'


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


const TodoList = ({ todoList, onRemoveTodo }) => {
    return (
        <div>
            <ul className={style.listStyle}>
                {todoList.map((item) => (
                    <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;