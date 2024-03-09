import * as React from 'react';


const AddTodoForm = ({ onAddTodo }) => {
    
     const handleAddTodo = (event) => {
        event.preventDefault();
        // The value of the input field can also be obtained with the following:
        //event.target.elements.todoTitle.value;
        //event.target.elements.title.value;
        //event.target.todoTitle.value
        //event.target.title.value
        const todoTitle = event.target[0].value;
        console.log(todoTitle)
        onAddTodo(todoTitle)
        event.target[0].value = ''
     }

    return(
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor='todoTitle' >Title</label>
                <input id='todoTitle' name='title'/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;