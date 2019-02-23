import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}//{} hier muss ein String hinein. classes.Button hält den String. Dies ist ein Array von zwei Strings
        onClick={props.clicked}>{props.children}</button>
);

export default button;