import React,{useState} from "react";
import { connect } from "react-redux";
import {addWish,addAddress ,addSalary} from './reducers/action'



function CheckApp(props) {
  console.log(props);

  const [id] = useState(123);
  const [pincode] = useState(244715);
  const [mobile] = useState(9927122658);

  console.log(id,pincode,mobile);

 
  const wishList = props.mywish.map((p, i) => <div key={i}>{p}</div>);

  return (
    <div>
      <h1>hello, My name is : {props.myname}</h1>
      <div>{wishList}</div>
        <h2>Address:{props.myAddress}</h2>
        <h2>Salary:{props.mySalary}</h2>


      <button onClick={() => {props.changeName("vini");}}>change it</button>
      <button onClick={() => {props.ChangeWish();}}>Add Wish</button>

      <button onClick={() => {props.CityAddress();}}>Change Address</button>
      <button onClick={() => {props.Salary('5000');}}>Add Salary</button>

        <p>id :{id}</p>
        <p>pincode :{pincode}</p>
        <p>mobile :{mobile}</p>

       {
        props.addData(id, pincode, mobile)
        }



    </div>
  );
}





// get the data from store & display
const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywish: state.wish,
    myAddress: state.Address,
    mySalary: state.Salary,
  };
};





//store the data
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch({ type: "CHANGE_NAME", payload: name });//without create action
    },
    //al are in action
    ChangeWish:()=>{ dispatch (addWish())},
    CityAddress:()=>{ dispatch (addAddress())},
    Salary:(sal)=>{ dispatch (addSalary(sal))},

    addData: (id, mobile, pincode) => {
        dispatch({
          type: "ADD_Data",
          payload: {
            id: id,
            pincode: pincode,
            mobile: mobile,
          },
        });
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckApp);







