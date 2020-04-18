const reducerAddress = (state = "", action) => {
    if (action.type === "CHANGE_ADDRESS") {
       return action.payload;
    }
    return state;
  };
  
  export default reducerAddress;
  