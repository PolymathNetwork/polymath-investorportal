import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import { reducers as authReducers } from 'polymath-auth'

import demo from '../app/crowdsale/reducer'

export default combineReducers({
  ...authReducers,
  form: reduxForm,
  demo,
})
