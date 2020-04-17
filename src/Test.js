import React from 'react';

import {connect} from 'react-redux';

function Test(props){
    console.log(props);
    return(
        <div>
            <h1>hello, My name is : {props.myname}</h1>
            <button onClick={() => {props.changeName("vini")}}>change it</button>
        </div>
    )
   
}


const mapStateToProps = (state) =>{
    return{
        myname : state.name
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeName:(name)=> {dispatch({type:'CHANGE_NAME', payload:name})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Test);