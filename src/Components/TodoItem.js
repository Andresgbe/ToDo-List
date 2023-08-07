import React from 'react'
import '../designs/TodoItem.css';

export function TodoItem({todo, onComplete, onDeleteItem}) {

  const getStyle = () => {
    return {
      textDecoration: todo.completed ? 'line-through' : 'none',
    }
  }

  return (
   <div className='estilo'>
    <div style = {getStyle()}>
      <input type='checkbox' checked = {todo.completed} 
      onChange= {() => onComplete(todo.id)}/>
        {todo.task}
      
      <div className='button-delete'>
        <button className='button-delete' onClick={ () => onDeleteItem(todo.id)}>Delete</button>
        </div>
      </div>
   </div>
  );
}


// className = 'add-btn'

// float: right; background red  color #ffff