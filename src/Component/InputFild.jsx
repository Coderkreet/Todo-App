import { Input } from "@material-tailwind/react";
import "./Card.css";
import { useState } from "react";
import Card from "./Card";


export function InputFild() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

const handleSave= ()=>{
setTodos ([...todos , {todo,isCompleted : false}])
setTodo("");
console.log(todos)
}


const handleChange = (e)=>{
setTodo(e.target.value);

}


  return (
    <div className="mt-[5rem] mb-[5rem] w-11/12 mx-auto">

      <div className=" flex gap-x-4 ">
<div className="w-full">
      <Input onChange={handleChange} value={todo} label="Write Here" icon={<i className="fas fa-heart" />} />
</div>
      <button onClick={handleSave} className="bookmarkBtn">
  <span className="IconContainer">
    <svg viewBox="0 0 384 512" height="0.9em" className="icon">
      <path
        d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
      ></path>
    </svg>
  </span>
  <p className="text">Save</p>
</button>

      </div>
 

 {
todos.map(item =>{

return <div className=" flex m-3 p-9">
<Card todopara={item.todo} isCompleted = {item.isCompleted}/>
</div>

})

 }

    </div>
  );
}