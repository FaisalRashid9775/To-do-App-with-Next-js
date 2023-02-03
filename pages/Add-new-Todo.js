import { useState } from "react";
import todoData from './todo-list.js'

export default function NewToDo() {
 const  [val, setval]= useState('')
 console.log(todoData)
  const addtodo=()=>{
    const addnewtodo = {todo:val , Complete : false}
    const addnewtodos= [...todoData, addnewtodo ]
     setval(addnewtodos)

  }
  return (
    <div style={{padding : 'center', textAlign : 'justify'}}>
      <input type='text' placeholder="Add new todo" value={val} onChange={(e)=>{setval(e.target.value)}}></input> 
      <button onClick={addtodo}> Add</button>
    </div>
  );
}
