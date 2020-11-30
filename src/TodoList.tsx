import React from 'react'
import { TodolistItem } from './TodolistItem'

interface TodoListprops{
    todos: Array<Todo>;
    toggleTodo: toggleTodo
}




export const TodoList: React.FC<TodoListprops> =({todos,toggleTodo})=> {
    return (
        <>
        <ul>
            {todos.map(todo =>{
             return   <TodolistItem key={todo.text} todo={todo}  toggleTodo={toggleTodo}/>
            })}
        </ul>
        </>
    );
};


