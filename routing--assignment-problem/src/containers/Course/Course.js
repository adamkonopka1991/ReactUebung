import React, { Component } from 'react';
import queryString from 'query-string';

class Course extends Component {
    state={
        chosenCourseTitle: null
    }
    
    componentDidMount()
    {
        console.log(this.props.location.search);
        
        const values=queryString.parse(this.props.location.search);
        console.log(values);
        if(values.title!=this.state.chosenCourseTitle || this.state.chosenCourseTitle==null)
        this.setState({chosenCourseTitle: values.title});

    }
    
    render () {
        return (
            <div>
                <h1>{this.state.chosenCourseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;