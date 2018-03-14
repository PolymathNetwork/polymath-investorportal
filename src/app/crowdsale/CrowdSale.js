import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initDemo } from './actions'

import { Tile, Button } from "carbon-components-react"

class CrowdSale extends Component {
  static propTypes = {
    balance: PropTypes.string,
    account: PropTypes.string,
    initDemo: PropTypes.func.isRequired,
  }

  componentWillMount () {
    this.props.initDemo()
  }

  render () {

    const n = 8

    return (

      <div className='bx--row'>

        <div className='bx--col-xs-12'>
          <div className='nav'>
            <div className='nav-header'>
              <div className='nav-title'>
                Polymath
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

          <p className='bx--type-beta'>TOKN Security Token headline</p>
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
            <div className='bx--grid tokenCountdown'>
              <div className='bx--row'>
                <div className='bx--col-xs-6 bx--col-md-3'><span>DAYS</span><h1>44</h1></div>
                <div className='bx--col-xs-6 bx--col-md-3'><span>HOURS</span><h1>34</h1></div>
                <div className='bx--col-xs-6 bx--col-md-3'><span>MINUTES</span><h1>12</h1></div>
                <div className='bx--col-xs-6 bx--col-md-3'><span>SECONDS</span><h1>22</h1></div>
              </div>
            </div>
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
})

const mapDispatchToProps = {
  initDemo,
}

export default connect(mapStateToProps, mapDispatchToProps)(CrowdSale)
