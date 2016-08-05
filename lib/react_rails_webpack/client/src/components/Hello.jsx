import React from 'react'

export default React.createClass({
  propTypes: {
    details: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return { greeting: 'Hello there, friend!' }
  },
  render () {
    return <div>
      <h2>This is the "Hello" component from 'components/Hello.jsx'</h2>
      <p>Details: {this.props.details}</p>
      <p>This is the greeting from your initial state: {this.state.greeting}</p>

      <label htmlFor='greeting'>Change the greeting here: </label>
      <input type='text' id='greeting' value={this.state.greeting} onChange={(e) => this.setState({ greeting: e.target.value })}/>
    </div>
  }
})
