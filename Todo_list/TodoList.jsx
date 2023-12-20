import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={() => onRemove(todo.id)}
          onToggle={() => onToggle(todo.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
