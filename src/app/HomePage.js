import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'carbon-components-react'

export default class HomePage extends Component {
  render () {
    return (
      <div>
        <h1>Home page.</h1>
        <p>
          <Link to='/crowdsale'>
            <Button>
              View Crowdsale
            </Button>
          </Link>
        </p>
      </div>
    )
  }
}
