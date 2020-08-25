
export const project=(state=[],action)=>{
    if(action.type === 'CREATE_PROJECT'){
        return [...state,action.payload];
    }
    else return state;
}