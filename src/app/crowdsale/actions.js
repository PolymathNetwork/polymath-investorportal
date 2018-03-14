import { PolyToken } from 'polymath.js_v2'
import axios from 'axios'
import { actionGen } from '../../redux/helpers'

export const DEMO = 'demo'
export const demo = actionGen(DEMO)

export const initDemo = (ticker) => async (dispatch) => {
  // await PolyToken.getTokens(250000)

  var myBalance = await PolyToken.myBalance()

  try {

    //TODO @shannon: Refactor the following API call
    axios.get('https://polymath-api-staging.herokuapp.com/securitytoken/' + ticker)
      .then(function (response) {

        dispatch(
          demo(
            {
              account: PolyToken.account,
              balance: myBalance,
              token: response,
            }
          )
        )
      })
      .catch(function (error) {
        //Do something for an error
      })

  } catch (e) {
    //Do something for an error
  }

}

