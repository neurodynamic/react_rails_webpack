import React from 'react'
import DevTools from './DevTools'
import initializeReduxStore from './initializeReduxStore'
import {Provider} from 'react-redux'

export default function wrapWithProvider (component, devTools = true) {
  // Add DevTools if this is NOT a production app
  if (process.env.NODE_ENV !== 'production' && devTools) {
    component = wrapWithDevTools(component)
  }

  // return component wrapped in Provider
  // with initialized react-redux store
  return React.createElement(
    Provider,
    {
      store: initializeReduxStore(),
      children: component
    }
  )
}

export function wrapWithDevTools (component) {
  return <div className='debug-panel-and-content-wrapper'>
    {component}
    <DevTools />
  </div>
}
