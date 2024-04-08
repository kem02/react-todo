import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel'


const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('')

    const handleTitleChange = ((event) => {
        const newTodoTitle = event.target.value
        console.log(newTodoTitle)
        setTodoTitle(newTodoTitle)
    })

    const handleAddTodo = (event) => {
        event.preventDefault();
        // The value of the input field can also be obtained with the following:
        //event.target.elements.todoTitle.value;
        //event.target.elements.title.value;
        //event.target.todoTitle.value
        //event.target[0].value
        // const todoTitle = event.target.title.value;

        console.log(todoTitle)
        onAddTodo({
            "id": Date.now(),
            "title": todoTitle
        })

        setTodoTitle('')
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel
                    todoTitle={todoTitle}
                    handleTitleChange={handleTitleChange}
                >
                    Title:
                </InputWithLabel>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;