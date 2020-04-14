// Set up initial state
export const initialState = {
  todos: []
};

// Reducer
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...initialState,
        todos: [
          ...initialState.todos, 
          action.payload
        ]
      };
    case "TOGGLE_ITEM":
      return {
        ...initialState,
        todos: state.todos.map(item => {
          if (action.payload.id === item.id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...initialState,
        todos: state.todos.filter(item => !item.completed)
      };
    default:
      console.error('no action.type was found')
  }
  return state;
};
