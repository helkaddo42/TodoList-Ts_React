import React from 'react'
import './TodolistItem.css'

interface ITodoListprops{
   todo: Todo;
   toggleTodo: toggleTodo
}

export const TodolistItem: React.FC<ITodoListprops> =({todo,toggleTodo})=> {
    
    return(
        <li className={todo.complete? 'complete': undefined }>
            <label>
                <input type="checkbox" 
                checked={todo.complete} 
                onChange={()=> toggleTodo(todo)}/>
                {todo.text}
            </label>
        </li>
    )
}

