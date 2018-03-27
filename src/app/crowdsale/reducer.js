import * as a from './actions'

const defaultState = {
  balance: null,
  token: null,
  details: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case a.DEMO:
      return {
        ...state,
        account: action.account,
        balance: action.balance,
        token: action.token,
        details: action.details,
      }

    default:
      return state
  }
}
