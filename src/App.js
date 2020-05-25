import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// import { initializeUser } from "./actions/auth";

import PublicRoute from './routing/PublicRoute';
import BusinessOwnerRoute from './routing/BusinessOwnerRoute';

import PublicLayout from './components/layouts/public/PublicLayout';
import BusinessOwnerLayout from './components/layouts/business-owner/BusinessOwnerLayout';

// Public components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/public/home/Home';
import Shop from './components/public/shop/Shop';

// Business Owner components
import Dashboard from './components/business-owner/Dashboard';

axios.defaults.withCredentials = true;
const store = configureStore();

function App() {
    return (
        <Provider store={store}>

            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />

                    <PublicRoute exact path='/' component={Home} layout={PublicLayout} />
                    <PublicRoute exact path='/shop' component={Shop} layout={PublicLayout} />

                    <BusinessOwnerRoute exact path='/bo' component={Dashboard} layout={BusinessOwnerLayout} />
                </Switch>
            </Router>

        </Provider>
    );
}

export default App;
