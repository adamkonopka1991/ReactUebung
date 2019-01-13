import React, { Component } from 'react';

import Aux from '../../hoc/auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state= {
        showSideDrawer: false,
    };

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    }
    /*When state depends on the old stste its a cleaner way to use the function- form of setting the state*/
    sideDrawerOpenedHandler = () =>{
        this.setState({showSideDrawer: true}); 
    }

    render()
    {
        return (
        <Aux>
            <Toolbar invisibleToggleButton={!this.showSideDrawer} clickedToggleButton={this.sideDrawerOpenedHandler} />
            <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
}



export default Layout;