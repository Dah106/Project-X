// action types
export const ADD_TODO = 'ADD_TODO'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const TODOS_FAILURE = 'TODOS_FAILURE'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const LOADED_TODOS = 'LOADED_TODOS'
export const FETCH_TODOS = 'FETCH_TODOS'
export const GET_BTC_BALANCES = 'GET_BTC_BALANCES'

// action creators
const addTodo = (todo) => {
  return { type: ADD_TODO, todo }
}

const addTodoSuccess = (todo) => {
  return { type: ADD_TODO_SUCCESS, todo }
}

const todosFailure = (error) => {
  return { type: TODOS_FAILURE, error }
}

const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, id }
}

const deleteTodo = (id) => {
  return { type: DELETE_TODO, id }
}

const loadedTodos = (todos) => {
  return { type: LOADED_TODOS, todos }
}

const fetchTodos = () => {
  return { type: FETCH_TODOS }
}

const getBtcBalances = () => {
  return { type: GET_BTC_BALANCES }
}

export {
	addTodo,
	addTodoSuccess,
	todosFailure,
	toggleTodo,
	deleteTodo,
	loadedTodos,
	fetchTodos,
	getBtcBalances
}
