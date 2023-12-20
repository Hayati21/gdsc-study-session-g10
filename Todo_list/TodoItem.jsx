import React from 'react';

function TodoItem({ todo, onRemove, onToggle }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={onToggle}
      >
        {todo.text}
      </span>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
}

export default TodoItem;
