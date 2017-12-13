import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ProgressItem from './ProgressItem'
import Organizations from '../organizations'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {Organizations.organizations.map((organization) => (
          <ProgressItem key={organization.acronym} organization={organization} />
        ))}
      </div>
    );
  }
}

export default App;