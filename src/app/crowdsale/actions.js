import { PolyToken, SecurityTokenRegistry, CappedSTOFactory } from 'polymath.js_v2'

// import type { SecurityToken } from 'polymath.js_v2/types'
import { actionGen } from '../../redux/helpers'

// import { getSecurityToken } from '../../api'

export const DEMO = 'demo'
export const demo = actionGen(DEMO)

export const initDemo = (ticker) => async (dispatch) => {
  // await PolyToken.getTokens(250000)

  // console.log(PolyToken)
  // console.log(SecurityTokenRegistry)

  var myBalance = await PolyToken.myBalance()
  // var tickerinfo = await SecurityTokenRegistrar.getTokenByTicker('ATO')

  var stoFactory = await CappedSTOFactory.address
  // console.log(stoFactory)

  const token = await SecurityTokenRegistry.getMyToken()
  const tickerInfo = await SecurityTokenRegistry.getTokenByTicker(ticker)

  // console.log("name", await token.contract.name())

  // console.log(stoFactory, new Date(2018, 5, 7), new Date(2018, 12, 31), new BigNumber('1000000'), new BigNumber('1000'), false, "0x524dbc9da47eAB28bfF57795A539654d72f8D098")
  // console.log("STO response", await token.contract.setSTO(stoFactory, new Date(2018, 5, 7), new Date(2018, 12, 31), '1000000', '500', false, "0x524dbc9da47eAB28bfF57795A539654d72f8D098"))
  // console.log(tickerInfo, token)
  const sto = await token.contract.getSTO()
  // console.log(sto)

  let tokenDetails = null

  if (sto === null) {
    await token.contract.setSTO(stoFactory, new Date(2018, 5, 7), new Date(2018, 12, 31), '1000000', '500', false, "0x524dbc9da47eAB28bfF57795A539654d72f8D098")
  } else {

    tokenDetails = await sto.getDetails()

    // console.log(await tokenDetails.getSTO())

  }

  // console.log("name", await token.contract.name())

  // console.log(CappedSTOFactory)

  // const stoDetails = await SecurityTokenRegistrar.contract()
  // stoDetails.getSTO()
  // console.log(stoDetails)

  // console.log('details', tokenDetails)

  try {

    // const meta = await getSecurityToken(ticker)
    // console.log(meta)

    dispatch(
      demo(
        {
          account: PolyToken.account,
          balance: myBalance,
          token: tickerInfo,
          details: tokenDetails,
        }
      )
    )

  } catch (e) {
    //Do something for an error
  }

}
