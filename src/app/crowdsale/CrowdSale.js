import React, { Component } from 'react'
import moment from 'moment'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tile, DataTable } from "carbon-components-react"
import { initDemo } from './actions'
import Clock from './components/Clock'

// De-structure `DataTable` directly to get local references
const { TableContainer,
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell } = DataTable

class CrowdSale extends Component {

  static propTypes = {
    balance: PropTypes.string,
    account: PropTypes.string,
    initDemo: PropTypes.func.isRequired,
    match: PropTypes.func,
    details: PropTypes.Array,
    token: PropTypes.string,
  }

  componentWillMount () {

    this.props.initDemo(this.props.match.params.id)
    // this.props.getDetails()

  }

  render () {

    // const n = 8

    const { details } = this.props

    const rowData = [{

      investor: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
      txHash: "0x4168696282b72e7e2add536b4f707e02713f1824ad694d007de7e91da42cf4e7",
      amount: "2000",
      paid: "1",

    }]

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
          {this.props.token ? (<p className='bx--type-beta'>{this.props.token.ticker} Security Token<br />{this.props.token.address}</p>) : 'Loading...'}

          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        {
          this.props.details !== null ? (
            <div className='bx--row'>
              <div className='bx--col-xs-6'>
                <p>&nbsp;</p>
                <ul className='tokenDuration'>
                  <li>
                    Start Time <span className='caption'>{moment(details.start).format("DD.MM.YYYY")}</span>
                  </li>
                  <li>
                    End Time <span className='caption'>{moment(details.end).format("DD.MM.YYYY")}</span>
                  </li>
                </ul>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>Total Funds Raised</p>
                <p className='bx--type-alpha'>{details.raised.toNumber()} POLY</p>
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
                  <p>Time left until offering finish</p>
                  <Clock deadline={moment(details.end).format("MMM, D, YYYY")} />
                </Tile>
              </div>
            </div>
          ) : (
            <div className='bx--col-xs-12'>
                Loading....
            </div>)}

        <div className='bx--col-xs-12'>
          <p>List of Investors</p>

          <DataTable
            rows={rowData}
            headers={[
              { key: "investor", header: "Investor" },
              { key: "txHash", header: "Tx Hash" },
              { key: "amount", header: "Amount" },
              { key: "paid", header: "Paid" }]}
            // eslint-disable-next-line
            render={({ rows, headers, getHeaderProps }) => {
              return (
                <TableContainer title='DataTable'>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {headers.map((header) => (
                          <TableHeader {...getHeaderProps({ header })}>
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )

            }}
          />

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  balance: state.demo.balance && state.demo.balance.toString(10),
  account: state.demo.account,
  token: state.demo.token,
  details: state.demo.details,
})

const mapDispatchToProps = {
  initDemo,
}

export default connect(mapStateToProps, mapDispatchToProps)(CrowdSale)
