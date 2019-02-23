import React from 'react';

import classes from './ToggleButton.module.css';

const toggleButton = (props) => {
    let toggleButtonClasses= [classes.ToggleButton];
    
    if(props.invisible)
    {
        toggleButtonClasses= [classes.ToggleButton, classes.Invisible];
    }

    return (
            <div className={toggleButtonClasses} onClick={props.clicked}>MENU</div>
    );
};

export default toggleButton;