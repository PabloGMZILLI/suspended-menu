import React from "react";
import ReactDOM from "react-dom";
import { LastLocationProvider } from 'react-router-last-location';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


import App from "./App";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import Master from "./Master"
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Router >
        <LastLocationProvider>
            <Switch >
                <Route exact path='/'><Master><App/></Master></Route> 
                <Route exact path='/settings'><Master><SettingsPage/></Master></Route>
                <Route exact path='*' component={ ErrorPage }/>
            </Switch>
        </LastLocationProvider>
    </Router>
    , rootElement);