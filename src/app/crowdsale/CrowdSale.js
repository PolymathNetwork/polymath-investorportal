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
    investors: PropTypes.Array,
    token: PropTypes.Array,
  }

  componentWillMount () {

    this.props.initDemo(this.props.match.params.id)
    // this.props.getDetails()

  }

  render () {

    // const n = 8
    const { details } = this.props

    let percentage = 0
    //Calculate progress of the fundraise
    if(details !== null){
      const amt_cap = details.cap.toNumber()
      const amt_raised = details.raised.toNumber()
      // const amt_raised = 200000

      percentage = (amt_raised/amt_cap)*100
      // console.log(percentage)
    }

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
                <p className='bx--type-alpha'>{details.raised.toNumber()} {details.fundraise_type? ("POLY"):("ETH")}</p>
                <p>&nbsp;</p>
                <div className='tokenProgress'>
                  <span className='tokenProgressStatus'>{percentage}%</span>
                  <span className='tokenProgressTotal'>{details.cap.toNumber()}</span>
                  <progress value={percentage} max='100'>{percentage} %</progress>
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

          {this.props.investors ? (
            <DataTable
              rows={this.props.investors}
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

          ) : 'Loading investors...'}

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
  investors: state.demo.investors,
})

const mapDispatchToProps = {
  initDemo,
}

export default connect(mapStateToProps, mapDispatchToProps)(CrowdSale)
