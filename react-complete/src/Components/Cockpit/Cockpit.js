import React from 'react';
import classes from './Cockpit.module.css';
import Aux from '../../hoc/auxiliary';

const cockpit = (props) =>{
    
    //CSS Klassen
    //css Klasse für Button
    const assignedClasses=[];
    let btnClass= classes.Button;
    if(props.showPersons)
    {
        btnClass=[classes.Button, classes.Red].join(' ');
    }

    if(props.persons.length<=2){
      assignedClasses.push(classes.Red); //classes will be just red;
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.Bold); //classes=['red','bold']
    }
    
    return(
        <Aux>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
            className={btnClass} 
            onClick={props.clicked}>Toggle Persons</button>

            <button onClick={props.login}>Login</button>
        </Aux>
     );
}

export default React.memo(cockpit);// will only rerender when the props we receive really change