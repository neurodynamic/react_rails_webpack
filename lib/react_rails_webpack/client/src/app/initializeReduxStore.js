import {compose, createStore, combineReducers} from 'redux'
import DevTools from './DevTools'

import exampleReducer from '../redux/reducer'

const reducer = combineReducers({
  example: exampleReducer
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
