import React,{useState} from 'react';
import { AddTodoForm } from './AddTodoForm';
import {TodoList} from './TodoList'
import './app.css'




const App: React.FC=()=>{

  const list: Array<Todo>=[]
  const [todos, setTodos] = useState(list)

  const toggleTodo: toggleTodo = (selectedTodo) =>{
    const newTodos = todos.map(todo =>{
      if(todo === selectedTodo){
        return{
            ...todo,
            complete: !todo.complete
    
          }
      }
      return todo
    });
    setTodos(newTodos)
  };

  const getTodo: getTodo=newTodos=>{
    newTodos.trim() !== '' &&
    setTodos([...todos,{text: newTodos, complete: false}])
  }


  return (

      <div className='app'>
        <h3>TodoList</h3>
       <TodoList todos={todos} toggleTodo={toggleTodo} />
       <AddTodoForm getTodo={getTodo}  />
      </div>
      
  );
}
export default App;
