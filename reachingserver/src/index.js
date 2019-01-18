import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';




//Default configurations
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'; //common header: are set on all type of requests; [Http - header field]
axios.defaults.headers.post['Content-Type']= 'application/json'; //only for post- requests

/*###################################################################################################################################
#######################################   INTERCEPTORS    ###########################################################################  */

// This will not be only shared in this file but across all files in my project. It will affect anyrequest sent from
// anywhere in my app
//Common use: For an authorization-header
const myInterceptorRequest= axios.interceptors.request.use( request =>{
    console.log(request);
    //edit request config
    return request;
},error =>{
    console.log(error);
    return Promise.reject(error); //return error hereso that we can still forward it to our request as we wrote in our component
    // where we can handle it again with the catch method. This makes sense if -> local erreor handling and global: eg. loging
    //something in a log- File or so
});

const myInterceptorResponse= axios.interceptors.response.use( response =>{
    console.log(response);
    //edit request config
    return response;
},error =>{
    console.log(error);
    return Promise.reject(error); //return error hereso that we can still forward it to our request as we wrote in our component
    // where we can handle it again with the catch method. This makes sense if -> local erreor handling and global: eg. loging
    //something in a log- File or so
});

//REMOVING interceptor again:
//thats why we save their references in variables /for example for components where a userauthentication is not necessary
axios.interceptors.request.eject(myInterceptorRequest);
axios.interceptors.response.eject(myInterceptorResponse);

/*######################################################################################################################################
######################################################################################################################################*/

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
