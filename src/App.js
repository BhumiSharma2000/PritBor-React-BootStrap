import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  const onDelete = (todo) => {

    console.log("This is OnDelete of todo ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }



  const AddTodoList = (title, description) => {
    console.log("I am add todo", title, description)
    let sno
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }



    const Todo =
    {
      sno: sno,
      title: title,
      desc: description,
    }
    setTodos([...todos, Todo]);
    console.log(Todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
      <Router>
        <Header title="Bhumi's To-do List" search={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return(
            <>
              <AddTodo AddTodoList={AddTodoList} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
