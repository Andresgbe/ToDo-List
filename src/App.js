import './App.css';
import data from './data.json';
import { useState } from 'react';
 import { TodoList } from './Components/script'
/* import { NameForm  } from './Components/script'; */
import { TodoForm } from './Components/TodoForm';



function App() {

  const [task, setTask] = useState(data);

  const onComplete = (id) => {
    console.log('task', id);

    setTask(task.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
    }))
  }

  const onDeleteItem = (id) => {
    setTask([...task].filter(todo => todo.id !== id));
  }

  const addTodo = (newTodo) => {
    console.log("newTodo", newTodo);
    let newItem = { id: task.length + 1, task: newTodo, completed: false };

    setTask([...task, newItem]);
  };

  return (
    <div className="App">
      <div className='contenedor'>
       <TodoForm addTodo={addTodo} />
        <TodoList task = {task} onComplete = {onComplete} onDeleteItem = {onDeleteItem} />
      </div>
    </div>
  );
}

export default App;

