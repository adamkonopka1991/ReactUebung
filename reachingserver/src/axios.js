import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

//can create multiple instances in different files for different parts of my application
//instance here will also asume default setup from index.js. but every property defined here gets overwritten (here eg. baseURL and Authorizaiton)

instance.defaults.headers.common['Authorization']= 'AUTH TOKEN FROM INSTANCE';


//You also have to use interceptors here again as in default

export default instance;