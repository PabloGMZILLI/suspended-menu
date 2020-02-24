import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import App from "./App";
import SettingsPage from "./SettingsPage";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/settings' component={SettingsPage} />
        </Switch>
    </BrowserRouter>
    , rootElement);
