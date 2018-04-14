import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
// import { Link } from 'react-router-dom'
import { Icon } from 'carbon-components-react'
import { connect } from 'react-redux'
import { STOStatus } from 'polymath-ui'
import BigNumber from 'bignumber.js'
import PropTypes from 'prop-types'
// import type { SecurityToken, STOPurchase, STODetails } from 'polymathjs'

// import NotFoundPage from '../../NotFoundPage'
// import InvestorTable from './components/InvestorTable'
import BuyTokenForm from './components/BuyTokenForm'
import { getTicker, fetch } from './actions'
import type { RootState } from '../../redux/reducer'

type StateProps = {|
  stage: number,
|}

type DispatchProps = {|
  fetch: () => any,
|}

// type Props = StateProps & DispatchProps

const mapStateToProps = (state: RootState): StateProps => ({
  token: state.sto.token,
  details: state.sto.details,
  purchases: state.sto.purchases,
})

const mapDispatchToProps: DispatchProps = {
  fetch, getTicker,
}

class InvestorPage extends Component {

  static propTypes = {
    // balance: PropTypes.string,
    // account: PropTypes.string,
    getTicker: PropTypes.func.isRequired,
    // match: PropTypes.func,
    // details: PropTypes.Array,
    // investors: PropTypes.Array,
    token: PropTypes.string.isRequired,
    purchases: PropTypes.Array,
  }

  componentWillMount () {
    // this.props.fetch()
    this.props.getTicker("SHTO")
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
                {/* <h1 className='bx--type-mega'>Investor Portal for {token.ticker} Token</h1>
                <p>&nbsp;</p>
                <p>
                  Owner: {token.owner}
                </p>
                <p>&nbsp;</p> */}
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
            <p>What to do Next:</p>
            <p>Lorem Ipsum dolor</p>
          </div>
        </div>

      </DocumentTitle>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestorPage)
