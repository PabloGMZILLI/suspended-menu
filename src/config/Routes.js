import React, { Suspense, lazy } from 'react';
import { LastLocationProvider } from 'react-router-last-location';
import {
    Switch,
    Route
} from 'react-router-dom';

import './styles.css'

const SettingsPage = lazy(() => import('../pages/settings' /* webpackChunkName: 'search' */));
const PageNotFound = lazy(() => import('../pages/error' /* webpackChunkName: 'search' */));
const HomePage = lazy(() => import('../pages/home' /* webpackChunkName: 'search' */));

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