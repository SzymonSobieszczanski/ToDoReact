import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Chat from "./components/chat";




ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Chat />, document.getElementById("rightdiv"));
registerServiceWorker();
