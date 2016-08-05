import {compose, createStore, combineReducers} from 'redux'
import DevTools from './DevTools'

import exampleReducer from '../redux/reducer'

// If you have more than one reducer, combine them here
const reducer = combineReducers({
  exampleReducer: exampleReducer
})

const finalCreateStore = compose(
  // Middleware you want to use in development:
  // applyMiddleware(d1, d2, d3),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore)

export default function () {
  const store = finalCreateStore(reducer)

  return store
}
