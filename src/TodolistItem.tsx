import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToogleTodo;
}

export const TodoListItem : React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label className={todo.complete ? "line-through" : undefined}>
                <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
                {todo.text}
            </label>
        </li>
    );
};