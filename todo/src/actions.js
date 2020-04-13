/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function clearCompleted(index) {
  return { type: CLEAR_COMPLETED, index}
}
