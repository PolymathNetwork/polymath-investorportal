// @flow

import App from './app/App'
import NotFoundPage from './app/NotFoundPage'
import SignUpPage from './app/account/SignUpPage'
// import TickerPage from './app/ticker/TickerPage'
// import Dashboard from './app/Dashboard'
// import TokenPage from './app/token/TokenPage'
// import STOPage from './app/sto/STOPage'
import InvestorPage from './app/sto/InvestorPage'

export default [
  {
    component: App,
    routes: [
      {
        path: '/signup',
        component: SignUpPage,
        exact: true,
      },

      {
        path: '/investorportal',
        component: InvestorPage,
        exact: true,
      },
      {
        component: NotFoundPage,
      },
    ],
  },
]
