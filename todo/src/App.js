import React, { useReducer } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {Reducer, initialState} from './reducers/Reducer';

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    const newTodo = {
      task: item,
      id: Date.now(),
      completed: false
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo })
  };

  // const toggleItem = id => {
  //   dispatch({ type: 'TOGGLE_ITEM', payload: id })
  // };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className="App">
      <h1>TODOs with Reducers</h1>
      <TodoForm 
        add={addItem} 
        clear={clearCompleted}
      />
      <TodoList 
        list={state.todos} 
        // toggle={toggleItem}
      />
    </div>
  );
}

export default App;
