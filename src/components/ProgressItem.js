import React, { Component } from 'react'

class ProgressItem extends Component {
    render() {
        return (
            <p>{this.props.organization.name}</p>
        )
    }
}

export default ProgressItem