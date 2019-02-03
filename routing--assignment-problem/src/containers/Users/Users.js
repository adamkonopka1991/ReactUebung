import React, { Component } from 'react';

import classes from './Users.module.css';

class Users extends Component {
    render () {
        return (
            <div className={classes.Users}>
                <h1>The Users Page</h1>
            </div>
        );
    }
}

export default Users;