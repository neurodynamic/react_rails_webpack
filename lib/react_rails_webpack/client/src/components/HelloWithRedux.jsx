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
      <h2><ReactLogo /> This is the "HelloWithRedux" component from <Icon icon='folder-open-o' /> client/src/components/HelloWithRedux.jsx</h2>
      <p><strong>Details</strong>: {this.props.details}</p>
      <p>Current greeting: {this.props.greeting}</p>

      <label htmlFor='greeting'>Change the greeting here: </label>
      <input type='text' id='greeting' value={this.props.greeting} onChange={(e) => this.props.setGreeting(e.target.value)}/>
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
