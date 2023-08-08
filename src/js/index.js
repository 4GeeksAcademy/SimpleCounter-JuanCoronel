import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

import Home from "./component/home.jsx";

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

function display() {
    ReactDOM.render(<Home digito={num1} digito2={num2}  digito3={num3} digito4={num4} digito5={num5}  digito6={num6}/>, document.querySelector("#app"));
    num1++;

    if (num1 > 9) {
        num2++;
        num1 = 0;
    }
    if (num2 > 9) {
        num2++;
        num3 = 0;
    }
    if (num3 > 9) {
        num3++;
        num4 = 0;
    }
    if (num4 > 9) {
        num4++;
        num5 = 0;
    }
    if (num5 > 9) {
        num5++;
        num6 = 0;
    }
    if (num6 > 9) {
        num6++;
        num6 = 0;
    }
}

setInterval(display, 1000);



