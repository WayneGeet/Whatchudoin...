import {useState} from 'react';

const Buttons = ({filterValue, setFilterValue, list, setFilter, filter}) => {
    const [value, setValue] = useState("all")
    const handleFilter = (i)=>{
        if(i === "all"){
            setValue("all")
            setFilter(list)
            console.log(filter)
            return;
        }
        else if(i === "active"){
            setValue("active")
            const activeList = list.filter(i => !i.done)
            setFilter(activeList)
            console.log(filter)
            return;
        }
        else{
            setValue("complete")
            const completeList = list.filter(i => i.done)
            setFilter(completeList)
        }

    }
  return (
    <>
        <div className="flex justify-center gap-8 items-center fixed top-[90vh] w-full px-10 left-0 mx-auto py-5 bg-inherit">
                <button
                onClick={()=>handleFilter("all")}
                className={`${value=== "all" && "bg-slate-600 rounded-lg animate-pulse"} text-[0.8rem] text-white block px-2 py-2 `}>All</button>

                <button className={`${value=== "active" && "bg-slate-600 rounded-lg animate-pulse"} text-[0.8rem] text-white block px-2 py-2 `}
                onClick={()=>handleFilter("active")}>Active</button>
                <button
                onClick={()=>handleFilter("complete")}
                className={`${value=== "complete" && "bg-slate-600 rounded-lg animate-pulse"} text-[0.8rem] text-white block px-2 py-2 `}>Completed</button>
            </div>
    </>
  )
}

export default Buttons