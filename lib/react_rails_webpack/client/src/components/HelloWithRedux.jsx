import React from 'react'

export default React.createClass({
  propTypes: {
    greeting: React.PropTypes.string.isRequired,
    setGreeting: React.PropTypes.func.isRequired
  },
  render () {
    return <div>
      <h2>This is the "HelloWithRedux" component from 'components/HelloWithRedux.jsx'</h2>
      <p>This is the greeting from the props supplied by redux: {this.props.greeting}</p>

      <label htmlFor='greeting'>Change the greeting here</label>
      <input type='text' id='greeting' value={this.props.greeting} onChange={(e) => this.props.setGreeting(e.target.value)}/>
    </div>
  }
})
