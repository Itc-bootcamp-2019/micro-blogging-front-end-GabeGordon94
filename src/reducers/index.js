
const tweetListReducer= (state=[],action) => {
    switch(action.type){
        case 'CREATE':
            return [...state,action.payload];
        default:
            return state;
    }
}

export default tweetListReducer