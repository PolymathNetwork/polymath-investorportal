import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom'
import { Button } from 'carbon-components-react'

export default class SplashPage extends Component {
  render () {
    return (
      <DocumentTitle title='Polymath'>
        <div className='bx--row'>
          <div className='bx--col-xs-8'>
            <h1 className='bx--type-mega'>Investor Portal</h1>
            <p>&nbsp;</p>
            <h3 className='bx--type-beta'>
              Ticker name is hard coded
            </h3>
            <p>&nbsp;</p>
            <p>
              <Link to='/investorportal'>
                <Button>
                  View STO Overview
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
