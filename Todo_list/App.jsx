// import GroupList from "./components/GroupList";
// function App() {
//   return (
//   <div><GroupList></GroupList></div>
  
//   )
// }

// export default App;

import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onRemove={removeTodo} onToggle={toggleTodo} />
      <AddTodoForm onAdd={addTodo} />
    </div>
  );
}

export default App;

