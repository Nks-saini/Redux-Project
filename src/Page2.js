import React, { useState } from "react";
import { connect } from "react-redux";

const axios = require("axios");

function Page2(props) {
  const [otp, setOtp] = useState("");

  const verfiy = (props) => {
    var mobile = props.mobile;
    var code = props.code;
    var hash = props.hash;

    if (otp && code && mobile && hash) {
      const formdata = new FormData();
      formdata.append("country_code", code);
      formdata.append("number", mobile);
      formdata.append("otp", otp);
      formdata.append("hash", hash);

      console.log(formdata);

      axios
        .post("http://34.87.184.92/api/v1/token/login/otp/verify/", formdata)
        .then(function (response) {
          console.log(response);
          if (response.data.status === "success") {
            window.localStorage.setItem(
              "access_token",
              response.data.data.access_token
            );
            console.log("access_token---", response.data.data.access_token);

            if (response.data.data.access_token) {
              console.log("got ot home page");
              // return navigate('/home/');
            } else {
              console.log("no access token got ot otp");
              // return navigate('/otp/');
            }
          }
        })
        .catch(function (error) {
          console.log("here", error);
        });
    } else if (otp) {
      console.log("no hash no number no code got to login");
    } else if (!otp) {
      console.log("please fill otp");
    }
  };

  return (
    <div>
      <h1>verifiy otp</h1>
      <h4>
        otp
        <input
          type="text"
          placeholder="otp"
          onChange={(e) => setOtp(e.target.value)}
        />
      </h4>

      <br />
      <button onClick={() => verfiy(props)}>verfiy OTP</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mobile: state.mobile,
    code: state.code,
    hash: state.hash,
  };
};

export default connect(mapStateToProps)(Page2);
