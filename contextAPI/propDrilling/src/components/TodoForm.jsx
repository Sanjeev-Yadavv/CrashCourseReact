import React from 'react';
import { useRef } from 'react';

const TodoForm = ({  addTodo }) => {
    const textRef = useRef(null)

    const handleChange = (e) => {
        const text = textRef.current.value
        //  console.log(text)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({ id: Math.random(), text: textRef.current.value })
        textRef.current.value = null
    }
    console.log('re rendering')

    return (
        <div>
            <h1>Creation part </h1>
            <form onSubmit={handleSubmit}>
                <input
                    ref={textRef}
                    type="text"
                    placeholder='create todo'
                    onChange={(e) => handleChange(e)}
                />
                <button type='submit'>Add todo</button>
            </form>
        </div>
    );
}

export default TodoForm;
