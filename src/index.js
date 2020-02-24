import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'


import App from "./App";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import Master from "./Master"
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter >
        <Switch >
            <Route exact path='/' component={ App }/> 
            <Route exact path='/settings' component={ SettingsPage  }/>
            <Route exact path='*' component={ ErrorPage  }/>
        </Switch>
    </BrowserRouter>
    , rootElement);