export const addWish =()=>{
    return{
        type:"add_wish",
        payload:'fish'
    }
}


export const addAddress =()=>{
    return{
        type:"CHANGE_ADDRESS",
        payload:'Delhi'
    }
}

export const addSalary =(sal)=>{
    return{
        type:"ADD_SALARY",
        payload:sal
    }
}