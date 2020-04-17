
const iState = {
         code:'',
         mobile:'',
         hash:''
    // name:"nitin",
    // wish:['eat','code']
}

// const reducer = (state = iState,action) =>{
//     console.log(action);
//         return state;
// }

// export default reducer;


const reducer = (state=iState,action) =>{
    if(action.type ==='SUBMIT'){
        return action.payload
    }
    return state;
}



// const reducer = (state = iState,action) =>{
//     console.log(action);
//     if(action.type === 'CHANGE_NAME'){
//         return{
//             ...state,
//             name:action.payload
//         }
//     }
//         return state;
// }

export default reducer;