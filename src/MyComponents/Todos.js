import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-5">Todos List</h3>
            {props.todos.length===0?<div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title">No To-Do to Display</h5>
                </div>
        </div> : props.todos.map((todo)=>{return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>})}
            
        </div>
    )
}
