let initialState={
    persons: []
}


let reducer= (state=initialState,action) =>
{
    switch(action.type)
    {
        case 'ADD_PERSON':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }
            const updatedPersons= state.persons.concat(newPerson);
            return{
                ...state,
                persons: updatedPersons
            }
        case 'DELETE_PERSON':
            const newPersons= state.persons.filter(person => person.id!==action.id);
            return{
                ...state,
                persons: newPersons
            }
    }

    return state;
}

export default reducer;