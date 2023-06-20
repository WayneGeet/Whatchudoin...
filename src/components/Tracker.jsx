import React from 'react'

const Tracker = ({list, setList, setFilter}) => {
  return (
    <>
       <ul className="md:max-w-lg md:mx-auto absolute flex justify-between items-center w-[95%] px-5 py-4 bg-[--dark-blue] rounded-lg text-[#dbdbdb]">
            <li className="text-sm">
                {list.length} items left
            </li>
            <li className="text-sm">
                <button
                onClick={()=>{
                  setFilter([])
                  setList([])
                }}
                type="button">clear list</button>
            </li>
        </ul> 
    </>
  )
}

export default Tracker