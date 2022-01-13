import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppSecond from "./AppSecond";
import AppThird from "./AppThird";
import AppFourth from "./AppFourth";
import AppContext from "./AppContext";
import AppApichallenge from "./AppApiChallenge";
import AppTest from "./AppTest";

import SidebarExample from "./components/SideBar";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppThird /> */}

    {/* <SidebarExample /> */}

    {/* <AppTest />
    <AppSecond />

    <AppFourth />
    <AppContext />
    <AppApichallenge /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
