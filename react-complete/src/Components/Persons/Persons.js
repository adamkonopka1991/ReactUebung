import React from 'react';
import Person from './Person/Person';


const persons= (props) => props.persons.map((person, index) => {
    return <Person
      click={() => props.clicked(index)}
      name={person.name}
      age={person.age} 
      key={person.id} //notwendig, sodass React effizienter arbeiten kann
      changed={(event) => props.changed(event, person.id)} />//so react does not rerender the whole list due to a change, it rerenders just the changed element
  });

  export default persons;