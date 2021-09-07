import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        // istanbul ignore else
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <div className="header">
        <Typography className="App-header" color="initial" variant="h2">
          QA BOX LET'S TEST
        </Typography>

      </div>
      <div className="App">
        <Typography className="title" variant="h4">
          React Todo
        </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>

  );
}

export default App;
