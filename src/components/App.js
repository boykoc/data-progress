import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ProgressItem from './ProgressItem'
import Organizations from '../organizations'
import { CSSTransitionGroup } from 'react-transition-group'

class App extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="app-load"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="App">
          <header className="container">
            <h1 className="app-title">Data Progress</h1>
          </header>
          {Organizations.organizations.map((organization) => (
            <ProgressItem key={organization.acronym} organization={organization} />
          ))}
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default App;
