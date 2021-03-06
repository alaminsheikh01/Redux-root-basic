// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
import { createStore } from "redux";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// use vanila javaScript
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// };

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// use vanila Redux

// reducer function have argument a initial state and action which one is a type
// from action or dispatch;
const reducer = (state = 0, action) => {
  //console.log(state, action);
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

// define action type

const ADD = "ADD";
const MINUS = "MINUS";

// first make a store and receive a reducer function
const store = createStore(reducer);

// this function will call everytime like a loop
const onChange = () => {
  number.innerText = store.getState();
};

// subscribe receive a function who can show all data on the browser;
store.subscribe(onChange);

const handleADD = () => {
  store.dispatch({ type: ADD });
};
const handleMINUS = () => {
  store.dispatch({ type: MINUS });
};

add.addEventListener("click", handleADD);
minus.addEventListener("click", handleMINUS);

// // with dispatch send a message to reducer
// store.dispatch({ type: "ADD" });
// store.dispatch({ type: "ADD" });
// store.dispatch({ type: "ADD" });
// store.dispatch({ type: "MINUS" });

// console.log(store.getState());
