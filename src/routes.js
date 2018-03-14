import App from './app/App'
import HomePage from './app/HomePage'
import CrowdSale from './app/crowdsale/CrowdSale'
import NotFoundPage from './app/NotFoundPage'

export default [
  {
    component: App,
    routes: [

      {
        path: '/',
        component: HomePage,
        exact: true,
      },
      {
        path: '/crowdsale/:id',
        component: CrowdSale,
        exact: true,
      },
      {
        component: NotFoundPage,
      },

      // TODO Put your routes here
    ],
  },
]
