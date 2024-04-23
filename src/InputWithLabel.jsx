import React, { useEffect, useRef } from "react";

const InputWithLabel = (props) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label htmlFor='todoTitle' >{props.children}</label>
            <input ref={inputRef} id='todoTitle' value={props.todoTitle} onChange={props.handleTitleChange} name='title'/>
        </>
    )
}

export default InputWithLabel;