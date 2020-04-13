import React from "react";

// Set up initial state
export const initialState = {
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
export const Reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          item: action.text, 
          completed: false,
          id: Date.now()
        }
      ]
      break;
      case 'TOGGLE_TODO': 
        return state; 
        break;
      case 'CLEAR_COMPLETED':
        return state;
        break;  
    default:
      return '';
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
}

