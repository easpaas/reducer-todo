import React from 'react';

const Todo = (props) => {
  return (
    <div className="todo-container">
      {
        props.task
      }
    </div>
  );
}

export default Todo;