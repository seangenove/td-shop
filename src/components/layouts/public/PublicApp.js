import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";

import '../../../styles/fashe/css/bootstrap.min.css'
import '../../../styles/fashe/css/main.min.css'
import '../../../styles/fashe/css/util.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PublicNavBar from './PublicNavBar';
import PublicFooter from './PublicFooter';
import Home from './../../public/home/Home';
import Shop from './../../public/shop/Shop';
import Login from './../../auth/Login';

const PublicApp = () => {
    return (
        <Router>
            <Helmet>
                <title>Déclencheur Shop</title>
            </Helmet>
            <PublicNavBar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/login' component={Login} />
            </Switch>

            <PublicFooter />
        </Router>

    )
}

export default PublicApp;