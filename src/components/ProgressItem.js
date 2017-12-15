import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' 
import {Doughnut} from 'react-chartjs-2';

class ProgressItem extends Component {
    buildData = (value) => (
        {
            labels: ['released', 'not release'],
            datasets: [{
                label: 'data 60',
                data: [value, 100 - value],
                backgroundColor: ['#E91E63']
            }]
        }
    )
    
    render() {
        const options = {
            legend: {
                labels: {
                    fontColor: '#FFFFFF'
                }
            }
        }
        
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
                            <Doughnut data={this.buildData(this.props.organization.releasedToDate)} options={options} />
                            <p className='value'>{this.props.organization.releasedToDate}<span className='metric-percent'>%</span></p>
                            <p className='value-label'>Released to Date</p>
                        </div>
                        <div className='item'>
                            <Doughnut data={this.buildData(this.props.organization.releasedCurrentYear)} options={options} />
                            <p className='value'>{this.props.organization.releasedCurrentYear}<span className='metric-percent'>%</span></p>
                            <p className='value-label'>Released This Year</p>
                        </div>
                        <div className='item'>
                            <Doughnut data={this.buildData(this.props.organization.releasedAsOpen)} options={options} />
                            <p className='value'>{this.props.organization.releasedAsOpen}<span className='metric-percent'>%</span></p>
                            <p className='value-label'>Released as Open</p>
                        </div>
                    </section>
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default ProgressItem