import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, webpack
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)