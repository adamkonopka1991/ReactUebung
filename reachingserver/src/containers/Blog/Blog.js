import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import axios from 'axios';
//importing axios from our instance instead:
import axios from '../../axios';
import asyncComponent from '../../components/hoc/asyncComponent';

import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';

const AsyncNewPost= asyncComponent(()=>{ //gets only imported when this constant is used somewhere
    return import('./NewPost/NewPost');
});


class Blog extends Component {
    state= {
        auth: true
    }

    

    


    render () {
        
        


        return (
            <div className="Blog">
                <header>

                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Posts</NavLink></li> {/*Always treated as an absolute path; exact added to tell react, that this link is only active when it isthe exact path; the full path hast to be / to receive the active class */}
                            <li><NavLink to={{  
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>{/*NavLink appends the "active" class to the active Link"*/}
                        </ul>
                    </nav>

                </header>

                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                
                <Switch> {/*The first route that matches a given path will be loaded and thereafter it will stop analyzing the routes*/}
                    {this.state.auth ?<Route path="/new-post" component={AsyncNewPost} />: null}{/*NewPost is recognized before Post*/}
                    <Route path="/posts" component={Posts} /> 
                    <Route render={()=> <h1>Not found</h1>}/>{/*This will catch any unknown route; Wont work with root route, because it also catches all*/}
                    {/* <Redirect from="/" to="/posts" /> Outside of switch -> from prop not specified. Everything gets redirected? / is just a prefix,- not exact */}
                </Switch>
                
                


                

                
            </div>
        );
    }
}

export default Blog;