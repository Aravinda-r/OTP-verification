import React, { useState } from "react";
import "./index";

function App() {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Phone Verification</h2>
          <hr />
          <p>Enter the OTP sent to you to Mobile Number</p>

          {otp.map((data, index) => {
            return (
              <input
                className="otp-field"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}

          <p>OTP Entered - {otp.join("")}</p>
          <p>
            <button
              className="btn btn-secondary mr-2"
              onClick={(e) => setOtp([...otp.map((v) => "")])}
            >
              Clear
            </button>
            <button
              className="btn btn-primary"
              onClick={(e) => alert("Entered OTP is " + otp.join(""))}
            >
              Verify OTP
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
