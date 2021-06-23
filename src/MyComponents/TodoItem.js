import React from 'react'
import {Link}  from "react-router-dom"
export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
        <div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.desc}</p>
                    <Link to="#" className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</Link>
                </div>
        </div>
            </>
            )
}
