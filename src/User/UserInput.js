import React, { Component } from 'react';

class UserInput extends Component {

    render() {


        return (
            <input style={{ border: '1px solid blue' }} type="text" onChange={this.props.handler} />
        )
    }

}

export default UserInput;