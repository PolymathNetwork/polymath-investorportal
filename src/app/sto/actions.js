// @flow

import { STO, CappedSTOFactory, SecurityTokenRegistry } from 'polymathjs'
import * as ui from 'polymath-ui'
import type { STOFactory, STODetails, STOPurchase } from 'polymathjs/types'

// import { formName as configureFormName } from './components/ConfigureSTOForm'
import type { ExtractReturn } from '../../redux/helpers'
// import type { GetState } from '../../redux/reducer'
// import { actionGen } from '../../redux/helpers'

// export const DEMO = 'demo'
// export const demo = actionGen(DEMO)

export const TICKER = 'sto/TICKER'
export const ticker = (token) => ({ type: TICKER, token })

export const DATA = 'sto/DATA'
export const data = (contract: STO, details: ?STODetails) => ({
  type: DATA,
  contract,
  details,
})

export const FACTORIES = 'sto/FACTORIES'
export const factories = (factories: Array<STOFactory>) => ({
  type: FACTORIES,
  factories,
})

export const USE_FACTORY = 'sto/USE_FACTORY'
export const useFactory = (factory: STOFactory) => ({
  type: USE_FACTORY,
  factory,
})

export const PURCHASES = 'sto/PURCHASES'
export const purchases = (purchases: Array<STOPurchase>) => ({
  type: PURCHASES,
  purchases,
})

export type Action =
  | ExtractReturn<typeof data>
  | ExtractReturn<typeof factories>;

export const getTicker = (tickerName) => async (dispatch) => {
  var tickerinfo = await SecurityTokenRegistry.getTokenByTicker(tickerName)
  // console.log(tickerinfo)

  // tickerinfo.contract.setSTO()

  // var balance = await PolyToken.myBalance()
  // console.log("my Balance", balance)

  dispatch(ticker(tickerinfo))
}

export const fetch = (tickerName) => async (dispatch: Function) => {
  dispatch(ui.fetching())
  try {
    // const token = getState().ticker.token
    const token = await SecurityTokenRegistry.getTokenByTicker(tickerName)

    if (!token) {
      // console.log('No token found')
      return dispatch(ui.fetched())
    } else {
      // console.log('token', token)
      dispatch(ticker(token))
    }

    if (!token.contract) {
      // console.log('No contract found')
      return dispatch(ui.fetched())
    }

    const sto = await token.contract.getSTO()

    var stoFactory = await CappedSTOFactory.address
    // console.log(stoFactory)

    // const sto = await tickerinfo.contract.getSTO()
    // console.log(sto)
    // console.log(token.contract.account)
    // let tokenDetails = null
    if (sto === null) {
      await token.contract.setSTO(
        stoFactory,
        new Date(2018, 5, 7),
        new Date(2018, 11, 31),
        '1000000',
        '500',
        false,
        token.contract.account
      )
    } else {
      // tokenDetails = await sto.getDetails()
      // console.log(tokenDetails)
      dispatch(data(sto, sto ? await sto.getDetails() : null))
      dispatch(ui.fetched())
    }
  } catch (e) {
    dispatch(ui.fetchingFailed(e))
  }
}

// TODO @bshevchenko: update when core will allow to retrieve factories list
export const fetchFactories = () => async (dispatch: Function) => {
  dispatch(ui.fetching())
  try {
    const title = await CappedSTOFactory.getTitle()
    dispatch(
      factories([
        {
          title,
          name: 'Polymath Inc.',
          usedBy: [
            'The Bureau Shevchenko LLC',
            'Everhusk Inc.',
            'Koverko & Co',
          ],
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
            'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
            'laboris nisi ut aliquip ex ea commodo consequat.,',
          isVerified: true,
          securityAuditBy: 'Zeppelin Solutions',
          address: CappedSTOFactory.address,
        },
      ])
    )
  } catch (e) {
    dispatch(ui.fetchingFailed(e))
  }
}

/* export const configure = () => async (dispatch: Function, getState: GetState) => {
  try {
    const factory = getState().sto.factory
    if (!factory) {
      return
    }
    const token = getState().token.token
    if (!token || !token.contract) {
      return
    }
    dispatch(ui.txStart('Configuring STO'))
    const contract: SecurityToken = token.contract
    const values = getState().form[configureFormName].values
    const [start, end] = values['start-end']
    const receipt = await contract.setSTO(
      factory.address,
      start,
      end,
      values.cap,
      values.rate,
      values.currency === 'ETH',
      contract.account,
    )
    dispatch(fetch())
    dispatch(ui.notify(
      'STO was successfully issued',
      true,
      'We have already sent you an email. Check your mailbox',
      ui.etherscanTx(receipt.transactionHash)
    ))
  } catch (e) {
    dispatch(ui.txFailed(e))
  }
}*/

// export const fetchPurchases = () => async (
//   dispatch: Function,
//   getState: GetState
// ) => {
//   dispatch(ui.fetching())
//   try {
//     const contract = getState().sto.contract
//     if (!contract) {
//       return
//     }
//     dispatch(factories(await contract.getPurchases()))
//     dispatch(ui.fetched())
//   } catch (e) {
//     dispatch(ui.fetchingFailed(e))
//   }
// }
