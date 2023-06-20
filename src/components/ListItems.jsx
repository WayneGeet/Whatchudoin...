import React from 'react'
import iconCheck from "../images/icon-check.svg";
import crossIcon from "../images/icon-cross.svg";


const ListItems = ({onToggle, todo, setFilter, setList, todos}) => {
  return (
    <div className="flex justify-between px-4 items-center">
        <div onClick={()=>onToggle(!todo.done, todo)}
            className={`${todo.done && "bg-[var(--dark-blue-gray)]"} relative flex items-center justify-center rounded-full p-3 border border-white border-opacity-20`}>{todo.done &&
            <img 
            className="absolute w-3"
            src={iconCheck} alt="todo.todo" />}</div>
            <li className={`${todo.done ? "text-slate-300 opacity-40": ""} text-[0.8rem] grow-1 w-full px-4 py-3.5 relative
            bg-inherit rounded-lg text-[#dbdbdb]`}>{todo.todo}</li>
            <button
            className="text-red-400 text-[0.8rem]"
            onClick={()=>{
                setFilter(todos.filter(item=> item.todo !== todo.todo))
                setList(todos.filter(item=> item.todo !== todo.todo))
            }}
                ><img src={crossIcon} alt="" /></button>
    </div>
  )
}

export default ListItems