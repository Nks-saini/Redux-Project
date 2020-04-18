
const iState = {
         code:'',
         mobile:'',
         hash:''
}

const reducer = (state=iState,action) =>{
    if(action.type ==='SUBMIT'){
        return action.payload
    }
    return state;
}

export default reducer;