import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import testData from './testData.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          Please use the following Data in a way you think is appropriate.
          <pre className="App-data">{JSON.stringify(testData, undefined, 2)}</pre>
        </p>
      </div>
    );
  }
}

export default App;
