import { PolyToken } from 'polymath.js_v2'

import { actionGen } from '../../redux/helpers'

export const DEMO = 'demo'
export const demo = actionGen(DEMO)

export const initDemo = () => async (dispatch) => {
  // await PolyToken.getTokens(250000)
  dispatch(
    demo(
      {
        account: PolyToken.account,
        balance: await PolyToken.myBalance(),
      }
    )
  )
}
