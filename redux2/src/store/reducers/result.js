import * as actionTypes from '../actions';


const initialState= {
    results: []
}

const reducer= (state= initialState,action) => {

    switch(action.type)
    {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})  //like push, however push mnipulates the original value, concat returns a new array: the old array plus the argument you add to concat.
            };

        case actionTypes.DELETE_RESULT:
            //state.results.splice(id,1); would mutate the original array!
            // const newArray=[...state.results]; //since elements of the array are objects this isn't enough, in case I want to change the objects properties(i would change the original object)!!!! for deleting its ok,cause i dont tocuh the object, i just remove it from the array.
            // newArray.splice(id,1);

            //the more common way:
            const updatedArray= state.results.filter(result => result.id !== action.resultElId); //doesnt change the old array, returns a new one.


            return{
                ...state,
                results: updatedArray
            };
    }

    


    return state;
};

export default reducer;