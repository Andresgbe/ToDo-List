import React from 'react';
import { TodoItem } from './TodoItem';
import '../designs/diseno.css';
import '../designs/TodoItem.css';

export function TodoList({task, onComplete, onDeleteItem}){
    return (
        <div className='div-cuadro tasks'>
            { 
            task.map((todo, index) => (
                <TodoItem key={`todo-${index}`} todo = {todo} onComplete = {onComplete} onDeleteItem = {onDeleteItem}/>
            ))
            }
        </div>
            )
}