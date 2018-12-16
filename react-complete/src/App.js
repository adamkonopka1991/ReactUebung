import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state= {
    persons: [
      {id: 'asdf', name: 'Max', age: 28},
      {id: 'sss', name: 'Manu', age: 29},
      {id: 'as', name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }
  
  deletePersonHandler = (personIndex) =>{
      //const persons= this.state.persons.slice();//makes a copy of the given array. Bad practice to manipulate the original array
      const persons= [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons: persons});
  }

  nameChangedHandler = (event,id) => {

    const personIndex= this.state.persons.findIndex(p => {
      return p.id===id;
    }); //für die Elemente, für die die innere Funktion true zurückgibt liefert this.state.persons.findIndex den Index zurück

    const person= {
      ...this.state.persons[personIndex]
    }; 
    // const person= Object.assign({},this.state.persons[personIndex]);

    person.name= event.target.value;

    //Kopie des persons-Arrays erstellt:
    const persons= [...this.state.persons];
    persons[personIndex]= person;//hfh


    this.setState({persons: persons});
  }

  togglePersonsHandler =() => {
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
  
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons= null;

    if(this.state.showPersons) {
      persons=(
        <div>

          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id} //notwendig, sodass React effizienter arbeiten kann
              changed={(event) => this.nameChangedHandler(event, person.id)} /> //so react does not rerender the whole list due to a change, it rerenders just the changed element
          })/*Umwandlung des persons-Array in ein Array aus JSX-Objekten*/}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        onClick={this.togglePersonsHandler}
        style={style}>Toggle Persons</button> {/*<!-- Function returns a function call;not executed immediately! we pass an anonymus function;*/}
        
        
        {persons}
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  }
}

export default App;
