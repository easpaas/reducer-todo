import React from 'react';
import './styles.css';

const Todo = (props) => {
  return (
    <div
      className={`${props.completed ? 'completed' : ''}`}
      onClick={() => {return props.toggleItem}}
    >
      {
        props.task
      }
    </div>
  );
}

export default Todo;