import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput.js';

class App extends Component {

  state= {
    username: "Adamski"
  };

  usernameChangeHandler = (event) => {

    this.setState({
      username: event.target.value
    })

  }

  render() {

    const style={
      backgroundColor: 'red',
      width: '60%',
      border: '2px solid grey'
    };

    return (
      <div className="App">
        <h1>Uebung 1</h1>
        <p>
          <UserInput 
          style={style}
          change={this.usernameChangeHandler} 
          username={this.state.username} />
        </p>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
