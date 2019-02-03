import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import classes from './App.module.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className={classes.App}>
        <nav>
          <ul>
            <li><NavLink to="/courses">Courses</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
          </ul>
        </nav>
        <div >
          <ol style={{textAlign: 'left'}}>
            <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li>Pass the course ID to the "Course" page and output it there</li>
            <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li>Load the "Course" component as a nested component of "Courses"</li>
            <li>Add a 404 error page and render it for any unknown routes</li>
            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
        </div>
        <Route path="/courses" component={Courses} />
        <Route path="/users" component={Users} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
