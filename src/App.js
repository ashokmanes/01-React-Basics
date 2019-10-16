import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = { name: "Ashok" };

  userChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1> User App </h1>
        <UserInput handler={this.userChangeHandler} />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
      </div>


    );
  }
}

export default App;
