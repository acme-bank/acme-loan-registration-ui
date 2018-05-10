import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

var app = document.getElementById("app");

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    app
);