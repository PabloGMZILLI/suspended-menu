import React from "react";
import ReactDOM from "react-dom";

import App from "./config/App";

{/* <Router >
    <LastLocationProvider>
        <Switch >
            <Route exact path='/'><Master><App/></Master></Route> 
            <Route exact path='/settings'><Master><SettingsPage/></Master></Route>
            <Route exact path='*' component={ ErrorPage }/>
        </Switch>
    </LastLocationProvider>
</Router> */}

const rootElement = document.getElementById("root");

ReactDOM.render(<App/>, rootElement);