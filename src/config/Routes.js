import React, { Suspense } from 'react';
import { LastLocationProvider } from 'react-router-last-location';
import {
    Switch,
    Route
} from 'react-router-dom';

import SettingsPage from "@pages/settings";
import PageNotFound from "@pages/error";
import HomePage from '@pages/home'

const LoadingArea = () => <h1>Carregando...</h1>
const Routes = () => {

    return (
        <Suspense fallback={<LoadingArea />}>
            <LastLocationProvider>
                <Switch >
                    <Route exact path='/' component={HomePage}/> 
                    <Route exact path='/settings' component={SettingsPage}/>
                    <Route exact path='*' component={ PageNotFound }/>
                </Switch>
            </LastLocationProvider>
        </Suspense>
    )}

export default Routes