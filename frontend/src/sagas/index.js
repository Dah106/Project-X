import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, FETCH_TODOS, GET_BTC_BALANCES, loadedTodos, addTodoSuccess, todosFailure, getBtcBalances } from '../actions/main_actions'

function* getAllBtcBalances () {
  try {
    const res = yield call(fetch, 'v1/btc')
    yield put(getBtcBalances())
  } catch (e) {
    yield put(todosFailure(e.message))
  }
}

function* getAllTodos () {
  try {
    const res = yield call(fetch, 'v1/todos')
    const todos = yield res.json()
    yield put(loadedTodos(todos))
  } catch (e) {
    yield put(todosFailure(e.message))
  }
}

function* saveTodo (action) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(action.todo),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    const res = yield call(fetch, 'v1/todos', options)
    const todo = yield res.json()
    yield put(addTodoSuccess(todo))
  } catch (e) {
    yield put(todosFailure(e.message))
  }
}

function* deleteTodo (action) {
  try {
    yield call(fetch, `v1/todos/${action.id}`, { method: 'DELETE' })
  } catch (e) {
    yield put(todosFailure(e.message))
  }
}

function* updateTodo (action) {
  try {
    yield call(fetch, `v1/todos/${action.id}`, { method: 'POST' })
  } catch (e) {
    yield put(todosFailure(e.message))
  }
}

function* rootSaga() {
  yield takeLatest(GET_BTC_BALANCES, getAllBtcBalances)
  yield takeLatest(FETCH_TODOS, getAllTodos)
  yield takeLatest(ADD_TODO, saveTodo);
  yield takeLatest(DELETE_TODO, deleteTodo);
  yield takeEvery(TOGGLE_TODO, updateTodo);
}

export default rootSaga;
