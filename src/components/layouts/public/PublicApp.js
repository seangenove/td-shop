import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import PublicNavBar from './PublicNavBar';
import PublicFooter from './PublicFooter';
import Home from './../../public/home/Home';
import Shop from './../../public/shop/Shop';

const PublicApp = () => {
    return (
        <Router>
            <PublicNavBar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/shop' component={Shop} />
            </Switch>

            <PublicFooter />
        </Router>

    )
}

export default PublicApp;