import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt ="altburger" />
    </div>//burgerLogo refers to a string navigation to the burger-logo- Image
);

export default logo;