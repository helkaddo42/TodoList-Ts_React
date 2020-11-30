import React,{useState, FormEvent} from 'react'

interface AddTodo{
    getTodo: getTodo
}



export const AddTodoForm: React.FC<AddTodo>=({getTodo})=>{

    const [newTodo, setNewTodo] = useState<string>('')

    const Submit=(e: FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        getTodo(newTodo)
        setNewTodo('')
    }

    return (
        <form >
            <input type='text'value={newTodo} onChange={e=> setNewTodo(e.target.value)}  />
            <button onClick={Submit}>Add Todo</button>
        </form>
    );
}

