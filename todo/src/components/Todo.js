import React from 'react';
import './styles.css';


const Todo = (props) => {
  return (
    <div
      className={`${props.completed ? 'completed' : ''}`}
      onClick={() => props.toggle(props.id)}
    >
      {
        props.task
      }
    </div>
  );
}

export default Todo;