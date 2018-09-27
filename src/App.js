import React, { Component } from 'react'
import Header from './components/header'
import Box from './components/box'
import Hero from './components/hero'
import Cyberpunk from './components/cyberpunk'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />
      <Cyberpunk />
      </div>

    );
  }
}

export default App;
