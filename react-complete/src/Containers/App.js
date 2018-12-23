import React, { Component } from 'react';
import classes from './App.module.css';

import Persons from '../Components/Persons/Persons.js';
import Cockpit from '../Components/Cockpit/Cockpit';



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
  
    
    // const rnd= Math.random();
    // if(rnd<0.7)
    // {
    //   throw new Error('Something went wrong');
    // }


    //Persons
    let persons= null;
    if(this.state.showPersons) 
    {
      persons= <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }


    

    return (
      
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  }
}

export default App;
