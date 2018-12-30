import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent{
    constructor(props) 
    {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
    }

    componentWillMount()
    {
    console.log("[Persons.js] Inside componentWillMount()");
    }

    componentDidMount()
    {
    console.log("[Persons.js] Inside componentDidMount()");
    }

    //Update Lifecycle Hooks:

    componentWillReceiveProps(nextProps)
    {
        console.log('[UPDATE Persons.js] Inside ComponentWillReceiveProps', nextProps);

    }

    // shouldComponentUpdate(nextProps, nextState)
    // {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked; 
    //     //Achtung: kein tiefer Vergleich! Nur Vergleich der Referenzen. Da aber hier
    //     // vor Update ein neuees Persons-Objekt erstellt wird und mit
    //     //setState im State gespeichert wird geht das hier!
        
    // }

    componentWillUpdate(nextProps, nextState)
    {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate()
    {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate'); 
    }
      

    render()
    {
        console.log("[Persons.js] Inside render()");
        return this.props.persons.map((person, index) => {
            return <Person
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age} 
              key={person.id} //notwendig, sodass React effizienter arbeiten kann
              changed={(event) => this.props.changed(event, person.id)} />//so react does not rerender the whole list due to a change, it rerenders just the changed element
          });
    }
} 

export default Persons;

