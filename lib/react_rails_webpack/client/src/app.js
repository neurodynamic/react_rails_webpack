import {
  renderReactComponentInDiv, renderLastComponentDiv
} from './app/renderingComponentsInDivs'

import './app.sass' // Require your styling files this way

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

// In development, render things automatically
if (process.env.NODE_ENV !== 'production') {
  const componentDivs = document.getElementsByClassName('react-component-target')

  Array.prototype.forEach.call(componentDivs, (div) => {
    renderReactComponentInDiv(div)
  })
} else {
  // In production, expose these methods
  // so they can be called by the app
  window.renderLastComponentDiv = renderLastComponentDiv
  document.renderLastComponentDiv = renderLastComponentDiv
}
