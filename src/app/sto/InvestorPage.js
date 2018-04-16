import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
// import { Link } from 'react-router-dom'
import { Icon } from 'carbon-components-react'
import { connect } from 'react-redux'
import { STOStatus } from 'polymath-ui'
import BigNumber from 'bignumber.js'
import PropTypes from 'prop-types'
import { change } from 'redux-form'
// import type { SecurityToken, STOPurchase, STODetails } from 'polymathjs'

// import NotFoundPage from '../../NotFoundPage'
// import InvestorTable from './components/InvestorTable'
import BuyTokenForm, { formName } from './components/BuyTokenForm'
import { getTicker, fetch } from './actions'
import type { RootState } from '../../redux/reducer'

type StateProps = {|
  stage: number,
|}

type DispatchProps = {|
  change: (? string) => any,
    fetch: () => any,
|}

// type Props = StateProps & DispatchProps

const mapStateToProps = (state: RootState): StateProps => ({
  account: state.network.account,
  token: state.sto.token,
  details: state.sto.details,
  purchases: state.sto.purchases,
})

const mapDispatchToProps: DispatchProps = {
  change: (value) => change(formName, 'owner', value, false, false),
  fetch,
  getTicker,
}

class InvestorPage extends Component {

  static propTypes = {
    // balance: PropTypes.string,
    // account: PropTypes.string,
    getTicker: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    // match: PropTypes.func,
    // details: PropTypes.Array,
    // investors: PropTypes.Array,
    account: PropTypes.string.isRequired,
    token: PropTypes.Object,
    purchases: PropTypes.Array,
  }

  componentWillMount () {
    // this.props.fetch()
    this.props.getTicker("SHTO")
    this.props.change(this.props.account)
  }

  render () {
    // console.log(this.props)
    const { token } = this.props

    const details = {
      start: new Date(2018, 1, 30),
      end: new Date(2018, 6, 30),
      raised: new BigNumber(5000),
      cap: new BigNumber(2000000),
      isPolyFundraise: false,
    }

    return (
      <DocumentTitle title='Polymath'>
        <div className='bx--row'>

          <div className='bx--col-xs-12'>
            {this.props.token ? (
              <div>

                <STOStatus
                  title={token.name}
                  start={details.start}
                  end={details.end}
                  raised={details.raised}
                  cap={details.cap}
                  isPolyFundraise={details.isPolyFundraise}
                />
                <p>&nbsp;</p>
              </div>
            ) : 'Loading...'}

          </div>
          <div className='bx--col-xs-6'>

            <BuyTokenForm title='Buy Tokens' />

          </div>
          <div className='bx--col-xs-6'>

            <h3 className='bx--type-beta'><Icon
              name='info--glyph'
              fill='blue'
              description='This is a description of the icon and what it does…'
              className='extra-class'
            />&nbsp;&nbsp;Instruction Title for Investor
            </h3>
            <p className='bx--type-gamma'>What to do Next:</p>
            <p className='bx--type-gamma'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>

      </DocumentTitle>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestorPage)
