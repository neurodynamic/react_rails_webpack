// Here are some examples of other features
// written into some React components
// defined purely as functions. You can do
// components this way if they're simple
// enough.

import React from 'react'

// USING IMAGES EXAMPLE COMPONENT
import reactImageUrl from '../images/react_logo.svg'

export const ReactLogo = () =>
  <img className='react-logo' src={reactImageUrl} />

// USING FONT AWESOME ICONS EXAMPLE COMPONENT
import 'font-awesome/scss/font-awesome.scss'

export const Icon = (props) =>
        <i className={'fa fa-' + props.icon}></i>

Icon.propTypes = { icon: React.PropTypes.string.isRequired }
