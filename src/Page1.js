import React, { Fragment, useState } from "react";
//  import Page2 from './Page2'
import { connect } from "react-redux";


const axios = require("axios");

function Page(props) {
  const [code, setCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [check, setCheck] = useState(false);




  function submit() {
    const frmdetails = {
      mobile: mobile,
      code: code,
    };
    console.log(frmdetails);

    if (mobile && code) {
      const formdata = new FormData();
      formdata.append("country_code", code);
      formdata.append("number", mobile);
      formdata.append("platform", "part");

      axios
        .post(
          "http://34.87.184.92/api/v1/token/login/otp/request-sms/",
          formdata
        )
        .then(function (response) {
          console.log(response);

          if (response.data.status === "success") {
            window.localStorage.setItem(
              "hash",
              JSON.stringify(response.data.data.hash)
            );
            var hash = response.data.data.hash;
            console.log("hash__", hash);
            {
              props.submit1(code, mobile, hash);
            }
            console.log("got to otp page");
          }
        })
        .catch(function (error) {
          console.log("here", error);
        });
    } else {
      setCheck(true);
      console.log("please fill form");
    }
  }

  return (
    <div>
      <h1>simple Login</h1>

      <p style={{ color: "red" }}>
        {check ? "Please Fill country code & mo  bile no " : null}
      </p>

      <h4>
        Country Code :
        <input
          type="text"
          placeholder="country code"
          onChange={(e) => setCode(e.target.value)}
        />
      </h4>
      <h4>
        Mobile No :
        <input
          type="text"
          placeholder="mobile no"
          onChange={(e) => setMobile(e.target.value)}
        />
      </h4>

      <br />
      <button onClick={() => submit()}>Send OTP</button>
      <hr />
    </div>
  );
}



const mapDispatchToProps = (dispatch) => {
  return {
    submit1: (code, mobile, hash) => {
      dispatch({
        type: "SUBMIT",
        payload: {
          code: code,
          mobile: mobile,
          hash: hash,
        },
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Page);
