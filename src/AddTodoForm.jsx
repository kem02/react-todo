import React, { useState } from 'react';


const AddTodoForm = ({ onAddTodo }) => {
    const [ todoTitle, setTodoTitle ] = useState('')

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
            "id": Date.now,
            "title": todoTitle
        })

        setTodoTitle('')
     }

    return(
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor='todoTitle' >Title</label>
                <input id='todoTitle' value={todoTitle} onChange={handleTitleChange} name='title'/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;