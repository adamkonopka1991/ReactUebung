import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult =>(
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li> 
                    ))}
                </ul>
            </div>
        );
    }
}


const mapStateToProps= state =>{
    return{
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }//map of prop names and slices of the state stored in redux.
} //how the state which is managed by redux should be mapped to props I use here in this container

const mapDispatchToProps= dispatch =>{
    return{
        onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type:actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type:actionTypes.ADD, val:5}),
        onSubtractCounter: () => dispatch({type:actionTypes.SUBTRACT, val: 5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}), //state does not need to be passed
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
        
    }// we define some prop names which will hold a reference to a function, which will eventually dispatch an action.
} //which kind of actions do i want to dispatch in this container?


export default connect(mapStateToProps,mapDispatchToProps)(Counter); //connect() returns a function () -- which slice of the state I want to get in this container?; which actions do I want to dispatch?
//connect gives us this container with access to this ctr property.