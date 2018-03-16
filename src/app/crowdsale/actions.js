import { PolyToken } from 'polymath.js_v2'
import { actionGen } from '../../redux/helpers'

import { getSecurityToken } from '../../api'

export const DEMO = 'demo'
export const demo = actionGen(DEMO)

export const initDemo = (ticker) => async (dispatch) => {
  // await PolyToken.getTokens(250000)

  var myBalance = await PolyToken.myBalance()

  try {

    const meta = await getSecurityToken(ticker)
    console.log(meta)

    dispatch(
      demo(
        {
          account: PolyToken.account,
          balance: myBalance,
          token: meta,
        }
      )
    )



  } catch (e) {
    //Do something for an error
  }

}

