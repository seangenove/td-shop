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

const PublicLayout = ({ children }) => {
    return (
        <div>
            <PublicNavBar />
            {children}
            <PublicFooter />
        </div>
    )
}

export default PublicLayout;