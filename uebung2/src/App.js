import React, { Component } from 'react';


import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {
  state={
    text: ""
  }


  changeTextHandler= (event) =>{
    let text= event.target.value;
    this.setState({text: text});
  }

  removeLetterHandler= (id)=>{
    let text= this.state.text;
    let textArray= text.split("");
    textArray.splice(id,1); //splice() returns the deleted value!
    text=textArray.join("");
    this.setState({text: text});

  }//sdfsdfsdf

  
  
  render() {

    let CharComponents=null;

    CharComponents=(
      <div>
        {this.state.text.split("").map((letter,id) =>{
          return <CharComponent
            letter={letter}
            click={() => this.removeLetterHandler(id)}
            value={this.state.text} />
        })}
      </div>
    );


    return (
      <div>
        <input type="text" onChange={this.changeTextHandler} value={this.state.text} />
        <p>
          The length of the Element is {this.state.text.length}
        </p>
        <ValidationComponent length={this.state.text.length} />
      
      {CharComponents}
      
      </div>

      
    );
  }
}

export default App;
