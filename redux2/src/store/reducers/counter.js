import * as actionTypes from '../actions';


const initialState= {
    counter: 0
}

const reducer= (state= initialState,action) => {

    switch(action.type)
    {
        case actionTypes.INCREMENT:
            const newState= Object.assign({}, state); //make a copy of the array,previously we deleted the results-array.
            newState.counter= state.counter + 1;
            return newState;


        case actionTypes.DECREMENT:
            return{
                ...state, //otherwise we would delete results[]
                counter: state.counter -1 //falls counter bereits in state existent wird er überschrieben.
            };

        case actionTypes.ADD:
            return{
                ...state,
                counter: state.counter + action.val
            };

        case actionTypes.SUBTRACT:
            return{
                ...state,
                counter: state.counter - action.val
            };
    }

    


    return state;
};

export default reducer;