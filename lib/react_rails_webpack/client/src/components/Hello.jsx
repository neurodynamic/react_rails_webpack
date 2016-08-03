import React from 'react'

export default React.createClass({
  initialState: function () {
    return 'What is up?'
  },
  render () {
    return <div>
      <h2>This is the "Hello" component from 'components/Hello.jsx'</h2>
      <p>This is the greeting from your initial state: {this.state.greeting}</p>

      <label htmlFor='greeting'>Change the greeting here</label>
      <input type='text' id='greeting' value={this.state.greeting} onChange={(e) => this.setState(e.target.value)}/>
    </div>
  }
})
