import * as a from './actions'

const defaultState = {
  balance: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case a.DEMO:
      return {
        ...state,
        account: action.account,
        balance: action.balance,
      }

    default:
      return state
  }
}
