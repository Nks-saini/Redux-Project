const reducerAddress = (state = "",action) => {
    if(action.type === "ADD_SALARY"){
        return action.payload
    }
    return state;
  };
  
  export default reducerAddress;
  