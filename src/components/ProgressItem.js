import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' 

class ProgressItem extends Component {
    render() {
        return (
            <div className='purple'>
            <CSSTransitionGroup
            key={this.props.organization.acronym}
        transitionName="app-load"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
            <section className='container'>
            
                <p className='title'>{this.props.organization.name}</p>
                <div className='item'>
                    <p className='value'>{this.props.organization.releasedToDate}</p>
                    <p className='value-label'>Released to Date</p>
                </div>
                <div className='item'>
                    <p className='value'>{this.props.organization.releasedCurrentYear}</p>
                    <p className='value-label'>Released This Year</p>
                </div>
                <div className='item'>
                    <p className='value'>{this.props.organization.releasedAsOpen}</p>
                    <p className='value-label'>Released as Open</p>
                </div>
            </section></CSSTransitionGroup></div>
        )
    }
}

export default ProgressItem