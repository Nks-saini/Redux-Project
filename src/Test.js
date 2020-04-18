import React,{useEffect,useState} from "react";

import { connect } from "react-redux";
const axios = require("axios");

function Test(props) {
//   console.log(props);

const [display, setDisplay] = useState([]);
const [name, setName] = useState("");
const [address, setAddress] = useState("");
const [salary, setSalary] = useState("");

const [entry, setEntry] = useState("");




  useEffect(() => {
    getData();
  }, [])


function getData(){
    axios
    .get(
      "http://localhost:3000/getdata"
    )
    .then(function (response) {
      setDisplay(response.data)
    })
    .catch(function (error) {
    });
}

  function submit(){
    //   console.log(name,address,salary);
      fetch( "http://localhost:3000/getdata", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name,address,salary}),
      })
        .then((response) => {
          alert("data created");
          console.log(response);
        })
        .catch((error) => {
        });
  }


  function add(){
    fetch( "http://localhost:3000/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({entry}),
    })
      .then((response) => {
        alert("add entry");
      })
      .catch((error) => {
      });
}


function del(id){
    fetch("http://localhost:3000/getdata/"+id, {
        method: "DELETE",
      })
        .then((response) => {
          alert("data deleted");
              getData();
        })
        .catch((error) => {
          console.log(error);
        });
}

  return (
    <div>
        {
            display.map((p,i) =>
            <div key={i}>
             <span>{p.id}</span>
             <span>{p.name}</span>
             <span>{p.salary}</span>
             <button onClick={() => del(p.id)}>delete</button>
             </div>
             )
        }
        <br/><br/>

        <label>Name</label>
        <input type="text"  value={name} onChange={(e) => setName(e.target.value)} /> <br/><br/>
        <label>Address</label>
        <input type="text"  value={address} onChange={(e) => setAddress(e.target.value)} /> <br/><br/>
        <label>Salary</label>
        <input type="text"  value={salary} onChange={(e) => setSalary(e.target.value)} /> <br/><br/>
        <button onClick={() => submit()}>Click</button>

        <br/><br/>

        <label>Entry</label>
        <input type="text"  value={entry} onChange={(e) => setEntry(e.target.value)} /> <br/><br/>
        <button onClick={() => add()}>add</button>

        {/* <button onClick={() => del()}>add</button> */}


       

      <h1>hello, My name is : {props.myname}</h1>
      <button
        onClick={() => {
          props.changeName("vini")
        }}
      >
        change it
      </button>
    </div>
  );
}




// get the data from store
const mapStateToProps = (state) => {
  return {
    myname: state.name,
  };
};



//store the data
const mapDispatchToProps = (dispatch) => {
    return {
      changeName2: (name) => {
        dispatch({ type: "CHANGE_NAME", payload: name });
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Test);
