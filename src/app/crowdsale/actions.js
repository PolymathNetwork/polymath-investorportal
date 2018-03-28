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
  let investorList = null

  if (sto === null) {
    await token.contract.setSTO(stoFactory, new Date(2018, 5, 7), new Date(2018, 12, 31), '1000000', '500', false, "0x524dbc9da47eAB28bfF57795A539654d72f8D098")
  } else {

    tokenDetails = await sto.getDetails()
    // console.log(tokenDetails)

    // investorList = await sto.getPurchases()

    investorList = [
      {
        investor: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
        txHash: "0x4168696282b72e7e2add536b4f707e02713f1824ad694d007de7e91da42cf4e7",
        amount: "2000",
        paid: "1",
        id: "1",
      }, {
        investor: "0xf17f52151EbEF6C7334FAD080c5704D77216b733",
        txHash: "0x4168696282b72e7e2add536b4f707e02713f1824ad694d007de7e91da42cf4e8",
        amount: "2000",
        paid: "2",
        id: "2",
      }, {
        investor: "0xf17f52151EbEF6C7334FAD080c5704D77216b734",
        txHash: "0x4168696282b72e7e2add536b4f707e02713f1824ad694d007de7e91da42cf4e9",
        amount: "2000",
        paid: "3",
        id: "3",
      }, {
        investor: "0xf17f52151EbEF6C7334FAD080c5704D77216b735",
        txHash: "0x4168696282b72e7e2add536b4f707e02713f1824ad694d007de7e91da42cf4e0",
        amount: "2000",
        paid: "4",
        id: "4",
      },
    ]

    // console.log(await sto.getPurchases())

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
          investors: investorList,
        }
      )
    )

  } catch (e) {
    //Do something for an error
  }

}
