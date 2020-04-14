import React from 'react';
import './styles.css';

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className="list-container">
      <h2>LIST</h2>
      {
        console.log(props.list)
      }
      {
        props.list.map(item => {
          return (
            <Todo 
              key={item.id} 
              task={item.task} 
              toggleItem={props.toggleItem}
              completed={item.completed}
            />
          )
        })
      }
    </div>
    );
}

export default TodoList;