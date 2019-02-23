import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/auxiliary';
import { AuthContext } from '../../../Containers/App';


class Person extends Component{
    constructor(props) 
    {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
    this.inputElement= React.createRef();
    }

    componentWillMount()
    {
    console.log("[Person.js] Inside componentWillMount()");
    }

    componentDidMount()
    {
    console.log("[Person.js] Inside componentDidMount()");
    if(this.props.position===0)
    {
        this.inputElement.current.focus(); //current holds the value the reference points to
    }
    
    }

    focus()
    {
        
        this.inputElement.current.focus(); //current holds the value the reference points to
        
    }
    
    render()
    {
        console.log("[Person.js] Inside render()");
        return (
            <Aux>
                <AuthContext.Consumer>
                {auth => auth ? <p>I am authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement} //creates a new proprty fo the class (inputElement) inp is a input element i got access to
                    //now we have a property in this class, which gives us access to this input element
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
            );
    }
}

Person.propTypes= {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}


export default withClass(Person,classes.Person);