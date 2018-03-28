import * as a from './actions'

const defaultState = {
  balance: null,
  token: null,
  details: null,
  investors: null,
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
        investors: action.investors,
      }

    default:
      return state
  }
}
