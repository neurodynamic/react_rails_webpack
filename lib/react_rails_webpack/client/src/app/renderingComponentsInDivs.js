import React from 'react'
import ReactDOM from 'react-dom'

import wrapWithProvider from './wrapWithProvider'

// Used in findAndCreateComponent
import components from './availableComponents'

// This function gets called by the react_rails_webpack Rails helper.
// It renders the specified component in the div from which the
// function is called.
export function renderLastComponentDiv () {
  const elements = document.getElementsByClassName('react-component-target')
  const lastElementIndex = elements.length - 1
  renderReactComponentInDiv(elements[lastElementIndex])
}

export function renderReactComponentInDiv (targetDiv) {
  const componentName = targetDiv.getAttribute('data-componentname')
  const componentProps = JSON.parse(targetDiv.getAttribute('data-componentprops'))

  ReactDOM.render(
    findAndCreateComponent(componentName, componentProps),
    targetDiv
  )
}

function findAndCreateComponent (componentName, props) {
  const component = components[componentName]
  const element = React.createElement(component.class, props)

  if (component.redux) {
    return wrapWithProvider(element)
  } else {
    return element
  }
}
