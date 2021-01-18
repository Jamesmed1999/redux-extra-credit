const counterReducer = (state = 0,action) => {
    switch(action.type)
    {
        case 'INCREMENT':
            return state +1;
        
        case 'DECRMENT':
            return state - 1;
        
        case 'CLEAR':
            return state = 0;

        case 'FIVE':
            return state + action.payload;
        
        default:
             return state;

    }
}

export default counterReducer;