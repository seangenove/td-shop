import React from 'react';
import { Link } from 'react-router-dom';

const PublicNavBar = () => (
    <header className="header1" style={{ maxHeight: '80px' }}>
        <DefaultNavBar />
        <MobileNavBar />
    </header>
);

const NavLinks = ({ isMobile = false }) => (
    <ul className="main_menu">
        <li><Link to='/' className={isMobile ? 'item-menu-mobile' : ''} >Home</Link></li>
        <li><Link to='/shop' className={isMobile ? 'item-menu-mobile' : ''} >Shop</Link></li>
        <li><Link to='/about' className={isMobile ? 'item-menu-mobile' : ''} >About</Link></li>
        <li><Link to='/contact' className={isMobile ? 'item-menu-mobile' : ''} >Contact</Link></li>
    </ul>
);

const DefaultNavBar = () => (
    <div className="container-menu-header">
        <div className="wrap_header">
            <Link to='/' className="logo">
                <h4>Déclencheur</h4>
            </Link>
            <div className="wrap_menu">
                <nav className="menu">
                    <NavLinks />
                </nav>
            </div>

            <div className="header-icons">
                <Link to='/' className="header-wrapicon1 dis-block">
                    <img src="fashe/images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
                </Link>

                <span className="linedivide1"></span>
                <div className="header-wrapicon2">
                    <div>
                        <img
                            src="fashe/images/icons/icon-header-02.png"
                            className="header-icon1 js-show-header-dropdown"
                            alt="ICON"
                        />
                        <span className="header-icons-noti">0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const MobileNavBar = () => {
    return (
        <div className="wrap_header_mobile">
            <Link to='/' className="logo">
                <img src="photos/logo2.png" alt="IMG-LOGO" />
            </Link>

            <div className="btn-show-menu">
                <div className="header-icons-mobile">
                    <Link to='/' className="header-wrapicon1 dis-block">
                        <img src="fashe/images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
                    </Link>
                    <span className="linedivide2" />
                    <div className="header-wrapicon2">
                        <img src="fashe/images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
                        <span className="header-icons-noti">0</span>
                    </div>
                </div>

                <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </div>
            </div>

            <div className="wrap-side-menu" >
                <nav className="side-menu">
                    <NavLinks />
                </nav>
            </div>
        </div>
    )
};

export default PublicNavBar;