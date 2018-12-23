import React, { Component } from 'react';

class ErrorBoundary extends Component{
    state= {
        hasError: false,
        errorMessage: ''
    }
    // IN cas of an error automatically called by react
    componentDidCatch= (error,info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }

    render(){
        if(this.state.hasError)
        {
            return <h1>{this.state.errorMessage}</h1>;

        }
        else
        {
            return this.props.children;
            //Blöcke in denen ein Fehler erwartet wird werden in
            //ErrorBoundary umschlossen. Im Falle dass kein Fehler
            //vorhanden wird dann das Kind augegeben
        }

        
    }
}

export default ErrorBoundary;