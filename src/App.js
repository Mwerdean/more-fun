import React, { Component } from 'react'
import Header from './components/header'
import Box from './components/box'
import Hero from './components/hero'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Hero />
      </div>

    );
  }
}

export default App;
