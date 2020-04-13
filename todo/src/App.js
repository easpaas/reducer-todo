import React from 'react';
import './App.css';

const initialState = {
  todos: [],
  completed: false
};

function App() {
  return (
    <div className="App">
      <h1>TODOs with Reducers</h1>
      {/* <TodoList data={this.state.data} /> */}
    </div>
  );
}

export default App;
