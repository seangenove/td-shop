import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Activity, Menu, LogOut, ShoppingBag } from 'react-feather';

import '../../../styles/sb-admin-pro/css/styles.css';

import URLRootPaths from './../../../config/URLRootPaths';

import { logoutUser } from './../../../actions/auth';

const BusinessOwnerLayout = ({ children, loggedInUser, logoutUser }) => {

    const toggleShowSidebar = () => {
        document.getElementById('mainBody').classList.toggle('sidenav-toggled');
    };

    return (
        <div>
            <div className="nav-fixed" id="mainBody">
                <BusinessOwnerNavbar toggleShowSidebar={toggleShowSidebar} logoutUser={logoutUser} />

                <div id="layoutSidenav">
                    <BusinessOwnerSidebar loggedInUser={loggedInUser} />

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

const BusinessOwnerNavbar = ({ toggleShowSidebar, logoutUser }) => {

    return (
        <nav className="topnav navbar navbar-expand shadow navbar-light bg-white" id="sidenavAccordion">
            <a className="navbar-brand px-2" href="index.html">Déclencheur Shop</a>
            <button
                className="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2"
                id="sidebarToggle"
                href="#!"
                onClick={toggleShowSidebar}
            >
                <Menu />
            </button>
            <form className="form-inline mr-auto d-none d-lg-block">
                <input className="form-control form-control-solid mr-sm-2" type="search" placeholder="Search"
                    aria-label="Search" />
            </form>
            <ul className="navbar-nav align-items-center ml-auto">
                <a
                    className="dropdown-item"
                    href="#!"
                    onClick={() => logoutUser()}
                >
                    Logout <LogOut />
                </a>
            </ul>
        </nav>
    )
}

const BusinessOwnerSidebar = ({ loggedInUser }) => {
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

                        <Link to={`${URLRootPaths.BUSINESS_OWNER}/products/categories`} className={'nav-link'}>
                            <div className="nav-link-icon"><ShoppingBag /></div>
                            Products
                        </Link>
                    </div>
                </div>
                <div className="sidenav-footer">
                    <div className="sidenav-footer-content">
                        {(loggedInUser.first_name || loggedInUser.last_name) && (
                            <div className="sidenav-footer-subtitle">
                                Logged in as: {`${loggedInUser.first_name} ${loggedInUser.last_name}`}
                            </div>
                        )}

                        <div className="sidenav-footer-title" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessOwnerLayout);
