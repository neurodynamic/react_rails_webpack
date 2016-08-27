import React from 'react'

import 'font-awesome/scss/font-awesome.scss'
import reactImageUrl from '../images/react_logo.svg'

export default React.createClass({
  render () {
    return <div className='bordered-component'>
      <h2>This is the "FeatureExamples" component from client/src/components/FeatureDemos.jsx</h2>

      <p>Here's an image:</p>
      <img className='react-logo' src={reactImageUrl} />

      <p>Here are some Font Awesome icons:</p>
      <i className='fa fa-rebel'></i>
      <i className='fa fa-empire'></i>
      <i className='fa fa-first-order'></i>
      <i className='fa fa-bomb'></i>
    </div>
  }
})
