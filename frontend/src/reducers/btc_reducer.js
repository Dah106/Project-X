import {
  GET_BTC_BALANCES
} from '../actions/main_actions'

export const BTC_DEFAULT_STATE = {
  loading: false,
  saving: false,
  error: '',
  items: []
}

export default function btcBalances (state = BTC_DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_BTC_BALANCES:
      return {...state, loading: false}
    default:
      return state
  }
}
