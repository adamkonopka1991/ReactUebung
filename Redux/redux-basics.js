const redux= require('redux');
const createStore= redux.createStore;

const initialState= {
    counter: 0
}

//Reducer
const rootReducer= (state=initialState, action) =>{ //initialState is the default value, in case state is undefined, if state is set, state will be passed.
    if(action.type==='INC_COUNTER')
    {
        return{
            ...state,
            counter: state.counter + 1
        };
    }

    if(action.type==='ADD_COUNTER')
    {
        return{
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
}



//Store
const store= createStore(rootReducer);
console.log(store.getState());


//Subscription - these make sure that i dont have to manually call setState.; must be coded before dispatches.
store.subscribe(()=>{
    //will be applied once an action is dispatched and the store is mutated
    console.log('[Subscription]', store.getState());
});



//Dispatching Action

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());



