import * as React from 'react';


const AddTodoForm = () => {
    return(
        <div>
            <form>
                <label htmlFor='todoTitle' >Title</label>
                <input id='todoTitle' />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;