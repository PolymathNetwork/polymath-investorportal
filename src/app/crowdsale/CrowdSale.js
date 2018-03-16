import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initDemo } from './actions'
import Clock from './components/Clock'

import { Tile, Button } from "carbon-components-react"

class CrowdSale extends Component {

  constructor (props) {
    super(props)
    this.state = { deadline: 'May, 4, 2018' }
  }

  static propTypes = {
    balance: PropTypes.string,
    account: PropTypes.string,
    initDemo: PropTypes.func.isRequired,
  }

  componentWillMount () {

    this.props.initDemo(this.props.match.params.id)
    // this.props.getDetails()

  }

  render () {

    const n = 8

    return (

      <div className='bx--row'>

        <div className='bx--col-xs-12'>
          <div className='nav'>
            <div className='nav-header'>
              <div className='nav-title'>
                <img alt='logo' src='/img/site-logo.svg' />
              </div>
            </div>
            <div className='nav-btn'>
              <label htmlFor='nav-check'>
                <span />
                <span />
                <span />
              </label>
            </div>

            <div className='nav-links'>
              <span>Ropsten
              </span>
              <span>{this.props.account}</span>
              <span>{this.props.balance} POLY</span>

            </div>
          </div>

        </div>

        <div className='bx--col-xs-12'>
          {this.props.token ? (<p className='bx--type-beta'>{this.props.token.data.ticker} Security Token headline</p>) : 'Loading...'}

          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div className='bx--col-xs-6'>
          <p>&nbsp;</p>
          <ul className='tokenDuration'>
            <li>
              Start Time <span className='caption'>11.03.2018</span>
            </li>
            <li>
              End Time <span className='caption'>11.03.2018</span>
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>Total Funds Raised</p>
          <p className='bx--type-alpha'>500,000 POLY</p>
          <p>&nbsp;</p>
          <div className='tokenProgress'>
            <span className='tokenProgressStatus'>50%</span>
            <span className='tokenProgressTotal'>1,000,000.00</span>
            <progress value='50' max='100'>50 %</progress>
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div className='bx--col-xs-6'>
          <Tile>
            <p>Time left until offering's finish</p>
            <Clock deadline={this.state.deadline} />

          </Tile>
          <Button kind='secondary'>Pause STO</Button>
        </div>
        <div className='bx--col-xs-12'>
          <p>List of Investors</p>

          <table className='bx--data-table-v2 bx--data-table-v2--compact'>
            <thead>
              <tr>
                <th>Eth Address of Investor</th>
                <th>TX Hash</th>
                <th>Tokens Bought</th>
                <th>Amount Invested</th>

              </tr>
            </thead>
            <tbody>

              {
                [...Array(n)].map((e, i) => (<tr key={i}>
                  <td>0xf17f52151EbEF6C7334FAD080c5704D77216b732</td>
                  <td>0x4168696282b72e7e2add536b4f707e02713f1824ad694d007de7e91da42cf4e7</td>
                  <td>2,000.00 TRVR</td>
                  <td>1 ETH ($1,000 USD)</td>
                </tr>))
              }

            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  balance: state.demo.balance && state.demo.balance.toString(10),
  account: state.demo.account,
  token: state.demo.token,
})

const mapDispatchToProps = {
  initDemo,
}

export default connect(mapStateToProps, mapDispatchToProps)(CrowdSale)
