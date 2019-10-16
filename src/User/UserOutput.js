import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component {

    render() {
        return (
            <p className="UserOutput"> {this.props.name}</p>
        )
    }
}

export default UserOutput;