import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { initializeUser } from "./actions/auth";

import PublicLayout from './components/layouts/public/PublicLayout';
// import AdminLayout from './components/layouts/public/AdminLayout';

import PublicRoute from './components/routing/PublicRoute';
import AdminRoute from './components/routing/AdminRoute';

import Home from './components/public/home/Home';
import Shop from './components/public/shop/Shop';
import Login from './components/auth/Login';

axios.defaults.withCredentials = true;
const store = configureStore();

function App() {
    return (
        <Provider store={store}>

            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />

                    <PublicRoute exact path='/' component={Home} layout={PublicLayout} />
                    <PublicRoute exact path='/shop' component={Shop} layout={PublicLayout} />
                </Switch>
            </Router>

        </Provider>
    );
}

export default App;
