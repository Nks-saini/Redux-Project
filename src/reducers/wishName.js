
const wish = (state = [],action) =>{
    if (action.type === "add_wish") {
        return[...state,action.payload]
        // return action.payload;
     }
     return state;
}

export default wish;