import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) =>{
    
    //CSS Klassen
    //css Klasse für Button
    const assignedClasses=[];
    let btnClass= "";
    if(props.showPersons)
    {
        btnClass=classes.Red;
    }

    if(props.persons.length<=2){
      assignedClasses.push(classes.Red); //classes will be just red;
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.Bold); //classes=['red','bold']
    }
    
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
            className={btnClass} 
            onClick={props.clicked}>Toggle Persons</button> {/*<!-- Function returns a function call;not executed immediately! we pass an anonymus function;*/}
        </div>
    );
}

export default cockpit;