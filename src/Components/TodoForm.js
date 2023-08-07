import React, { useState } from 'react';
import '../designs/TodoForm.css';

export function TodoForm({addTodo}) {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim() !== ''){
            addTodo(userInput);
            setUserInput('');
        }
    }

    return (
        <div style= {{margin: 20}}>
            <form onSubmit={handleSubmit}>
            <div className='agregar'>   
                <h1 className='titulo'>To Do List</h1> 
                <input className='input' type = "text" value = {userInput} onChange = {handleChange}/>
                <button className='button'><span>Add</span></button>
            </div> 
        </form>
        </div>
    )  
}