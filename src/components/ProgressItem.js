import React, { Component } from 'react'

class ProgressItem extends Component {
    render() {
        return (
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
            </section>
        )
    }
}

export default ProgressItem