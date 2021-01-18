const reducer = (state = initalState,action) => {
    switch(action.type)
    {
        case 'ADD_POST':
            return Object.assign({}, state,{
                posts: [
                    ...state.posts,
                    action.data
                ]
            })
        
        case 'SORT_VALUE':
            return state = action.sort;
 
        
        default:
             return state;

    }
}
//I would then go into my actions and create the sort value action that takes one varible that updates the sort type based on input