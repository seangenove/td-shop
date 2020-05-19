import React from 'react';

import PublicHeader from './PublicHeader';
import PublicFooter from './PublicFooter';
import Home from './../../public/home/Home';

const PublicApp = () => {
    return (
        <div>
            <PublicHeader />
            <Home />
            <PublicFooter />
        </div>
    )
}

export default PublicApp;