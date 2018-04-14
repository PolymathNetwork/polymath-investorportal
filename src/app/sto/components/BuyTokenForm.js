// @flow

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { Form, Button } from 'carbon-components-react'
import { TextInput } from 'polymath-ui'
import {
  required,
  integer,
} from 'polymath-ui/dist/validate'

export const formName = 'configure_sto'

type Props = {
  handleSubmit: () => void,
  title: null
}

// const defaultCurrency = 'POLY'

class BuyTokenForm extends Component<Props> {
  render () {
    return (
      <div className='page-box'>
        <div className='bx--col-xs-auto'>
          <h3 id='pui-sto-status-title' className='bx--type-beta'>{this.props.title}</h3>
        </div>
        <Form onSubmit={this.props.handleSubmit}>

          <Field
            name='ethAddress'
            component={TextInput}
            label='ETH Address'
            placeholder='Your ETH Address'
            validate={[required]}
          />
          <Field
            name='amount'
            component={TextInput}
            label='amount'
            placeholder='Enter amount of investment'
            validate={[required, integer]}
          />
          <p>&nbsp;</p>
          <Button type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default reduxForm({
  form: formName,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(BuyTokenForm)
