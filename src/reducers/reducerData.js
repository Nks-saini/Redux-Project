
const iState = {
    id:'',
    pincode:'',
    mobile:''
}

const reducer = (state=iState,action) =>{
if(action.type ==='ADD_Data'){
   return action.payload
}
return state;
}

export default reducer;