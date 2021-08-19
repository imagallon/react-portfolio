import React, { useState } from "react";

import "./Contact.css";

const style = {
  float: "right",
};

export default function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { target } = e;
  //   // const inputType = target.name;
  //   const inputValue = target.value;

  //   console.log(inputValue);

  //   // Based on the input type, we set the state of either email, username, and password
  //   // if (inputValue === "email") {
  //   //   setEmail(inputValue);
  //   // }
  //   // if (inputValue === "userName") {
  //   //   setUserName(inputValue);
  //   // }
  //   // if (inputValue === "message") {
  //   //   setMessage(inputValue);
  //   // }
  //   // if (inputValue === "message") {
  //   //   setNumber(inputValue);
  //   // }
  // };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setUserName("");
    setNumber("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <form>
        <div className="container">
          <div className="row">
            <h1>contact us</h1>
          </div>
          <div className="row"></div>
          <div className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label>Name</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input" style={style}>
                <input
                  type="text"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <label>Phone Number</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label>Message</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="btn-lrg submit-btn" onClick={handleFormSubmit}>
                Send Message
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
