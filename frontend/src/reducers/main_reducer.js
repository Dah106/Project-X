import { combineReducers } from 'redux'
import todos, { TODOS_DEFAULT_STATE } from './todos_reducer'
import btcBalances, { BTC_DEFAULT_STATE } from './btc_reducer'

const mainReducer = combineReducers({
  todos,
  btcBalances
})

export const DEFAULT_STATE = {
  todos: TODOS_DEFAULT_STATE,
  btcBalances: BTC_DEFAULT_STATE
}

export default mainReducer
