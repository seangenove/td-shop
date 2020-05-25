import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Menu, LogOut } from 'react-feather';

import '../../../styles/sb-admin-pro/css/styles.css';

import URLRootPaths from './../../../config/URLRootPaths';

const BusinessOwnerLayout = ({ children }) => {
    return (
        <div>
            <div className="nav-fixed">
                <BusinessOwnerNavbar />

                <div id="layoutSidenav">
                    <BusinessOwnerSidebar />

                    <div id="layoutSidenav_content">
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BusinessOwnerNavbar = () => {
    return (
        <nav className="topnav navbar navbar-expand shadow navbar-light bg-white" id="sidenavAccordion">
            <a className="navbar-brand d-none d-sm-block" href="index.html">Déclencheur Shop</a>
            <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2" id="sidebarToggle"
                href="#!">
                <Menu />
            </button>
            <form className="form-inline mr-auto d-none d-lg-block">
                <input className="form-control form-control-solid mr-sm-2" type="search" placeholder="Search"
                    aria-label="Search" />
            </form>
            <ul className="navbar-nav align-items-center ml-auto">
                <a className="dropdown-item" href="/logout">
                    Logout <LogOut />
                </a>
            </ul>
        </nav>
    )
}

const BusinessOwnerSidebar = ({ children }) => {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sidenav shadow-right sidenav-light">
                <div className="sidenav-menu">
                    <div className="nav accordion" id="accordionSidenav">
                        <div className="sidenav-menu-heading">Management</div>

                        <Link to={`${URLRootPaths.BUSINESS_OWNER}`} className={'nav-link'}>
                            <div className="nav-link-icon"><Activity /></div>
                            Dashboard
                        </Link>
                    </div>
                </div>
                <div className="sidenav-footer">
                    <div className="sidenav-footer-content">
                        <div className="sidenav-footer-subtitle">Logged in as:</div>
                        <div className="sidenav-footer-title" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default BusinessOwnerLayout;
