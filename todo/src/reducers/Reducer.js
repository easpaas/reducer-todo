import React from "react";

// Set up initial state
const initialState = {
  todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 1
  },
  {
    item: 'Learn about actions',
    completed: false,
    id: 2
  }],
};


// Reducer
const Reducer = (state = initialState, action) => {
  switch(action.type) {
    case '':
      // code block
      break;
    default:
      // code block
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
}
