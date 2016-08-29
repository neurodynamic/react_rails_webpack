import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../redux/reducer'

import {ReactLogo, Icon} from './FeatureWidgets'

export const HelloWithRedux = React.createClass({
  propTypes: {
    greeting: React.PropTypes.string.isRequired,
    details: React.PropTypes.string.isRequired,
    setGreeting: React.PropTypes.func.isRequired
  },
  render () {
    return <div className='bordered-component'>
      <h2><ReactLogo /> This is the HelloWithRedux component</h2>
      <div className='source'>from the <code>HelloWithRedux.jsx</code> file in <Icon icon='folder-open' /> <code>client/src/components</code></div>

      <div className='info-block'>
        <label htmlFor='redux-greeting'><strong>Change greeting</strong>: </label>
        <input type='text' id='redux-greeting' value={this.props.greeting} onChange={(e) => this.props.setGreeting(e.target.value)}/>
      </div>

      <div className='info-block'><strong>Current greeting</strong>: {this.props.greeting}</div>
      <div className='info-block'><strong>Details</strong>: {this.props.details}</div>
    </div>
  }
})

function mapStateToProps (state) {
  return { greeting: state.exampleReducer.greeting }
}

export const HelloWithReduxContainer = connect(
  mapStateToProps,
  actionCreators
)(HelloWithRedux)
