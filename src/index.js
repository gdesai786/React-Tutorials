import React from "react";
import ReactDOM from "react-dom";
const name = "Gaurav";
const number = 9;
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p> Your Lucky Number is {number} </p>
  </div>,
  document.getElementById("root")
);
