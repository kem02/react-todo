import React, { useEffect, useRef } from "react";

const InputWithLabel = ({todoTitle, handleTitleChange, children}) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label htmlFor='todoTitle' >{children}</label>
            <input ref={inputRef} id='todoTitle' value={todoTitle} onChange={handleTitleChange} name='title'/>
        </>
    )
}

export default InputWithLabel;