// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// ReactDOM.render(<App />, document.getElementById("root"));
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Login from "./Login.js";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
//ReactDOM.render(<Timer />, document.getElementById("root"));
//-----accesing child nodes
// ReactDOM.render(
//   <App>
//     <li>List element</li>
//     <h3>Heading element</h3>
//     <p>Paragraph element</p>
//     <span>Span element</span>
//   </App>,
//   document.getElementById("root")
// );

//------Setting Default Values to Props
// ReactDOM.render(<App element2="React" />, document.getElementById("root"));
// serviceWorker.unregister();

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Login} />
    <Route path="/home/:name" component={Home} />
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
