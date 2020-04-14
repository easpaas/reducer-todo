import React, { useReducer } from 'react';
import './styles.css';

import {Reducer, initialState} from '../reducers/Reducer';


const Todo = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  
  const toggleItem = id => {
    dispatch({ type: 'TOGGLE_ITEM', payload: id })
  };

  return (
    <div
      className={`${props.completed ? 'completed' : ''}`}
      onClick={() => toggleItem(props.id)}
    >
      {
        props.task
      }
    </div>
  );
}

export default Todo;