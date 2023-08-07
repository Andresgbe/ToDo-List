import { useState } from 'react';
import React from 'react';
import { TodoItem } from './TodoItem';
import '../diseno.css';
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

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      let variable = '';
      let estado = '';
      let setEstado = '';
      

      function Estado(prop, setProps, word) {
        [prop, setProps] = useState(word);
    }

      const changeTarea = () => {

        variable = this.state.value;
        Estado(estado,setEstado,variable);

    }
}
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {

        let tasks = [];
        let a = 0;

        if(this.state.value != ''){
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
        } else { 
            console.log("invalido");
        }

        tasks[a] = this.state.value;

        console.log(tasks[a]);

    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          
          <input type="submit" value="Submit" />
          <button>Push me </button>
        </form>
      );
    }
}
  



