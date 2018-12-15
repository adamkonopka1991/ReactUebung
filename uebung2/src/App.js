import React, { Component } from 'react';


import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {
  state={
    length: 0,
    text: ""
  }

  changeTextHandler= (event) =>{
    let text= event.target.value;
    this.setState({
      length: text.length,
      text: text
    });
  }
  
  render() {
    


    return (
      <div>
        <input type="text" onChange={this.changeTextHandler} />
        <p>
          The length of the Element is {this.state.length}
        </p>
        <ValidationComponent length={this.state.length} />
      </div>
    );
  }
}

export default App;
