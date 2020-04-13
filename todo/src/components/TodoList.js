import React from 'react';
import './styles.css';

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className="list-container">
      {
        props.todoList.map(item => {
          return (
            <Todo 
              key={item.id} 
              item={item} 
              toggleItem={props.toggleItem}
            />
          )
        })
      }
    </div>
    );
}

export default TodoList;