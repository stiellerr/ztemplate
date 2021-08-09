//console.log("hello");

//import  "~bootstrap"
//import "bootstrap";

//import "bootstrap/scss/bootstrap.scss";
/*
[1, 2, 3, 4, 5, 6, 7, 9, 10].forEach((i) => {
    console.log(i);
});
*/
import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./components/MyComponent";

ReactDOM.render(
    React.createElement(MyComponent, { title: "Hello React!" }),
    document.getElementById("root")
);

//import "./index.scss";

// images.
//import "./images/michael-su.jpg";
