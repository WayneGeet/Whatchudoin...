import ListItems from "./ListItems";
import { v4 as uuid } from 'uuid';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
const List = ({todos, setFilter, onToggle, onDragEnd, setList}) => {
    const droppableId = uuid()
  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={droppableId} >
            {(provided)=>(
            <ul ref={provided.innerRef} {...provided.droppableProps}
            className="bg-[--dark-blue] rounded-lg">
                {todos.map((todo, index)=>{
                    return(
                        <Draggable
                        draggableId={todo.id.toString()}
                        index={index}
                        key={todo.id}>
                            {(provided, snapshot) => (
                            <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                                <div
                                className="border-b border-white border-opacity-20">
                                    <ListItems onToggle={onToggle} todo={todo} todos={todos} setList={setList} setFilter={setFilter}/>
                                </div>
                            </div>
                            )}
                        </Draggable>
                    )
                })}
                {provided.placeholder}
            </ul>
            )}
        </Droppable>
    </DragDropContext>
  )
}

export default List