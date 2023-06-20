import {useState} from "react";
import List from "./List";
import Tracker from "./Tracker";
import Buttons from "./Buttons";

const Input = () => {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);
    const [id, setId] = useState(1);
    const [filter, setFilter] = useState([]);
    const [filterValue, setFilterValue] = useState("all");
    

    function handleEnterClick(e){
        if(e.key === "Enter"){
            if(todo.length){
            setId((prev)=>prev + 2)
            setList([ ...list, {todo:todo, done:false, id:id}])
            setFilter([...list, {todo:todo, done:false, id:id}])
            setTodo("")
            }
            else{
                alert("The todo field must have characters")
            }
        }
    }

    function handleToggle(isChecked, todo){
        setList(list.map(item=>{
            if(todo.todo === item.todo){
                return {...item, done:isChecked}
            }
            else{
                return item
            }
        }))
        setFilter(filter.map(item=>{
            if(todo.todo === item.todo){
                return {...item, done:isChecked}
            }
            else{
                return item
            }
        }))
    }
    
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    const handleDragEnd = ({destination, source}) => {
        if(!destination) return;
        setFilter(reorder(list, source.index, destination.index));
        setList(reorder(list, source.index, destination.index));
    };   

  return (
    <>
        <div className="relative rounded-lg md:max-w-lg md:mx-auto">
            <input 
            type="text" 
            value={todo}
            placeholder="Create a new todo..."
            onChange={(e)=>setTodo(e.target.value)}
            className="w-full px-3 py-4 relative text-white bg-[var(--dark-blue)] mb-5 rounded-md text-[0.8rem]"
            onKeyDown={handleEnterClick}
            />
            <div className="max-h-[55vh] h-[55vh] overflow-y-auto">
                <List todos={filter} setList={setList} setFilter={setFilter} onToggle={handleToggle} onDragEnd={handleDragEnd}/> 
            </div>  
               
            <div className="flex justify-center  ">
                {list.length ? <Tracker list={list} setFilter={setFilter} setList={setList}/> : <h2 className="text-sm absolute left-0 text-center w-[90%] px-4 py-3.5 bg-[--dark-blue] rounded-lg text-[#dbdbdb]">🙄Let's chill and refill 😋</h2>}
            </div>
            <Buttons filterValue={filterValue} setFilterValue={setFilterValue} list={list} setFilter={setFilter} filter={filter}/>
            {/* another component */}            
        </div>
        
    </>
  )
}

export default Input