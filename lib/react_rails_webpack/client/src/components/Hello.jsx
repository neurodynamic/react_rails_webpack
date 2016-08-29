import React from 'react'

import {ReactLogo, Icon} from './FeatureWidgets'

export default React.createClass({
  propTypes: {
    details: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return { greeting: 'Hello there, friend!' }
  },
  render () {
    return <div className='bordered-component'>
      <h2><ReactLogo /> This is the Hello component</h2>
      <div className='source'>from the <code>Hello.jsx</code> file in <Icon icon='folder-open' /> <code>client/src/components</code></div>

      <div className='info-block'>
        <label htmlFor='greeting'><strong>Change greeting</strong>: </label>
        <input type='text' id='greeting' value={this.state.greeting} onChange={(e) => this.setState({ greeting: e.target.value })}/>
      </div>

      <div className='info-block'><strong>Current greeting</strong>: {this.state.greeting}</div>

      <div className='info-block'><strong>Details</strong>: {this.props.details}</div>
    </div>
  }
})
