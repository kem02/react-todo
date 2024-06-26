import React from 'react';
import style from './TodoListItem.module.css';
import TrashButton from '../assets/trash.svg?react'
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
        <div>
            <li className={style.ListItem}>
                {todo.title}
                <TrashButton className={style.trashButton} height="18px" width="18px" type='button' onClick={() => onRemoveTodo(todo.id)}/>

            </li>
        </div>
    )
};

TodoListItem.propTypes ={
    todo:PropTypes.object.isRequired,
    onRemoveTodo:PropTypes.func.isRequired,
}

export default TodoListItem;