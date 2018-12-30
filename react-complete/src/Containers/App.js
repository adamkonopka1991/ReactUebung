import React, { PureComponent } from 'react';
import classes from './App.module.css';

import Persons from '../Components/Persons/Persons.js';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../hoc/auxiliary';
import withClass from '../hoc/withClass';



class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
    this.state= {
      persons: [
        {id: 'asdf', name: 'Max', age: 28},
        {id: 'sss', name: 'Manu', age: 29},
        {id: 'as', name: 'Stephanie', age: 26}
      ],
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount()
  {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount()
  {
    console.log("[App.js] Inside componentDidMount()");
  }

  //Update- Lifecycle Hooks:
  // shouldComponentUpdate(nextProps, nextState)
  // {
  //     console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //     return nextState.persons !== this.state.persons ||
  //         nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState)
  {
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate()
  {
    console.log('[UPDATE App.js] Inside componentDidUpdate'); 
  }

  
  //deletes a Person of the persons-array
  deletePersonHandler = (personIndex) =>{
      //const persons= this.state.persons.slice();//makes a copy of the given array. Bad practice to manipulate the original array
      const persons= [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons: persons});
  }

  //Changes the name of a person
  nameChangedHandler = (event,id) => 
  {
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
    persons[personIndex]= person;
    this.setState({persons: persons});
  }

  //changes state of showPersons
  togglePersonsHandler =() => 
  {
    const doesShow= this.state.showPersons;
    this.setState((prevState,props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked +1
      }
    });
  }

  render() {
    console.log("[App.js] Inside render()");
    //Define persons binding to use in return
    let persons= null;
    
    //persons will be set if showPersons is true
    if(this.state.showPersons) 
    {
      persons= <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <button onClick={()=>{this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      
      </Aux>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
export default withClass(App, classes.App);
