import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../../ToggleButton/ToggleButton';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.MobileOnly}>
            <ToggleButton invisible={props.invisibleToggleButton} clicked={props.clickedToggleButton} />
        </div>
        <div className={classes.Logo}>
            <Logo />     
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
