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
      <ReactLogo />
      <h2>This is the "Hello" component</h2>

      <p><strong>Source</strong>: <Icon icon='folder-open-o' /> client/src/components/Hello.jsx</p>
      <p><strong>Details</strong>: {this.props.details}</p>
      <p>Current greeting: {this.state.greeting}</p>

      <label htmlFor='greeting'>Change the greeting here: </label>
      <input type='text' id='greeting' value={this.state.greeting} onChange={(e) => this.setState({ greeting: e.target.value })}/>
    </div>
  }
})
