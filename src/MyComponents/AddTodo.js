import React from 'react'
import { useState } from 'react';
export const AddTodo = ({ AddTodoList }) => {
    let addStyle =
    {
        border: "2px solid black",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 15
    }
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or Description is not assigned !!!")
        }
        else {
            AddTodoList(title, description);
            setTitle("");
            setDescription("");
        }

    }

    return (
        <>
            <div className="container my-5 py-10" style={addStyle}>
                <h3>Add To-do</h3>

                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter Title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" value={description} id="description" onChange={(e) => { setDescription(e.target.value) }} rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btn btn-success btn-sm" id="submit" />
                    </div>
                </form>
            </div>
        </>
    )
}
