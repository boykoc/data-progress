import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ProgressItem from './ProgressItem'
import Organizations from '../organizations'
import { CSSTransitionGroup } from 'react-transition-group'
import ArrowLeftIcon from 'react-icons/lib/fa/arrow-left'
import ArrowRightIcon from 'react-icons/lib/fa/arrow-right'
class App extends Component {
  state = {
    organizations: [],
    selectedOrganizationIndex: 0
  }
  
  componentDidMount() {
    this.setState({ organizations: Organizations.organizations })
  }
  
  handleNext = () => {
    this.setState({ selectedOrganizationIndex: this.state.selectedOrganizationIndex + 1 })
  }
  
  handlePrevious = () => {
    this.setState({ selectedOrganizationIndex: this.state.selectedOrganizationIndex - 1 })
  }
  
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
          {this.state.organizations.length > 0 && 
            <ProgressItem organization={this.state.organizations[this.state.selectedOrganizationIndex]} />
          }
        </div>
        <div className='container white'>
          <button
            onClick={this.handlePrevious} 
            disabled={this.state.selectedOrganizationIndex <= 0}><ArrowLeftIcon size={30} fill={'#E91E63'}/><span>Previous</span></button>
          <div className='spacer'></div>
          <button 
            onClick={this.handleNext} 
            disabled={this.state.selectedOrganizationIndex >= this.state.organizations.length - 1}><span>Next</span><ArrowRightIcon size={30} fill={'#E91E63'}/></button>
          </div>
      </CSSTransitionGroup>
    );
  }
}

export default App;
