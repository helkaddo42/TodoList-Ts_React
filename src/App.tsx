import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './TodoForm';
import './App.css';

const initialTodos: Array<Todo> = [
  { text: "Create a TodoList project", complete: true },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toogleTodo: ToogleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && 
    setTodos([...todos, { text: newTodo, complete: false}]);
  }

  return (
    <div className="App">
      <h1>Todo List in TypeScript</h1>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toogleTodo={toogleTodo}/>
    </div>
  );
}

export default App;
