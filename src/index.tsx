//alias
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("app");

ReactDOM.render(
	<React.StrictMode>
		  <App />
	</React.StrictMode>,
	rootElement
);
