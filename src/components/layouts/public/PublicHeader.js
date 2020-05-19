import React from 'react';

import PublicFixedNavBar from './PublicFixedNavBar';
import PublicNavBar from './PublicNavBar';

const PublicHeader = () => {
    return (
        <header className="header1" style={{ maxHeight: '80px' }}>

            <div className="container-menu-header">


                <div className="wrap_header">

                    <a href="index.html" className="logo">
                        <h1>Déclencheur</h1>
                    </a>


                    <div className="wrap_menu">
                        <nav className="menu">
                            <ul className="main_menu">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>

                                <li>
                                    <a href="product.html">Shop</a>
                                </li>

                                <li>
                                    <a href="product.html">Sale</a>
                                </li>

                                <li>
                                    <a href="about.html">About</a>
                                </li>

                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>


                    <div className="header-icons">
                        <a href="#" className="header-wrapicon1 dis-block">
                            <img src="fashe/images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
                        </a>

                        <span className="linedivide1"></span>

                        <div className="header-wrapicon2">
                            <img src="fashe/images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
                            <span className="header-icons-noti">0</span>


                            <div className="header-cart header-dropdown">
                                <ul className="header-cart-wrapitem">
                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src="fashe/images/item-cart-01.jpg" alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <a href="#" className="header-cart-item-name">
                                                White Shirt With Pleat Detail Back
                                            </a>

                                            <span className="header-cart-item-info">
                                                1 x $19.00
                                            </span>
                                        </div>
                                    </li>

                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src="fashe/images/item-cart-02.jpg" alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <a href="#" className="header-cart-item-name">
                                                Converse All Star Hi Black Canvas
                                            </a>

                                            <span className="header-cart-item-info">
                                                1 x $39.00
                                            </span>
                                        </div>
                                    </li>

                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src="fashe/images/item-cart-03.jpg" alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <a href="#" className="header-cart-item-name">
                                                Nixon Porter Leather Watch In Tan
                                            </a>

                                            <span className="header-cart-item-info">
                                                1 x $17.00
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <div className="header-cart-total">
                                    Total: $75.00
                                </div>

                                <div className="header-cart-buttons">
                                    <div className="header-cart-wrapbtn">

                                        <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                            View Cart
                                        </a>
                                    </div>

                                    <div className="header-cart-wrapbtn">

                                        <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                            Check Out
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="wrap_header_mobile">

                <a href="index.html" className="logo-mobile">
                    <img src="photos/logo2.png" alt="IMG-LOGO" />
                </a>


                <div className="btn-show-menu">

                    <div className="header-icons-mobile">
                        <a href="#" className="header-wrapicon1 dis-block">
                            <img src="fashe/images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
                        </a>

                        <span className="linedivide2"></span>

                        <div className="header-wrapicon2">
                            <img src="fashe/images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
                            <span className="header-icons-noti">0</span>


                            <div className="header-cart header-dropdown">
                                <ul className="header-cart-wrapitem">
                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src="fashe/images/item-cart-01.jpg" alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <a href="#" className="header-cart-item-name">
                                                White Shirt With Pleat Detail Back
                                            </a>

                                            <span className="header-cart-item-info">
                                                1 x $19.00
                                            </span>
                                        </div>
                                    </li>

                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src="fashe/images/item-cart-02.jpg" alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <a href="#" className="header-cart-item-name">
                                                Converse All Star Hi Black Canvas
                                            </a>

                                            <span className="header-cart-item-info">
                                                1 x $39.00
                                            </span>
                                        </div>
                                    </li>

                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src="fashe/images/item-cart-03.jpg" alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <a href="#" className="header-cart-item-name">
                                                Nixon Porter Leather Watch In Tan
                                            </a>

                                            <span className="header-cart-item-info">
                                                1 x $17.00
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <div className="header-cart-total">
                                    Total: $75.00
                                </div>

                                <div className="header-cart-buttons">
                                    <div className="header-cart-wrapbtn">

                                        <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                            View Cart
                                        </a>
                                    </div>

                                    <div className="header-cart-wrapbtn">

                                        <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                            Check Out
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>
            </div>


            <div className="wrap-side-menu" >
                <nav className="side-menu">
                    <ul className="main-menu">
                        <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                            <span className="topbar-child1">
                                Free shipping for standard order over $100
                            </span>
                        </li>

                        <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                            <div className="topbar-child2-mobile">
                                <span className="topbar-email">
                                    fashe@example.com
                                </span>

                                <div className="topbar-language rs1-select2">
                                    <select className="selection-1" name="time">
                                        <option>USD</option>
                                        <option>EUR</option>
                                    </select>
                                </div>
                            </div>
                        </li>

                        <li className="item-topbar-mobile p-l-10">
                            <div className="topbar-social-mobile">
                                <a href="#" className="topbar-social-item fa fa-facebook"></a>
                                <a href="#" className="topbar-social-item fa fa-instagram"></a>
                                <a href="#" className="topbar-social-item fa fa-pinterest-p"></a>
                                <a href="#" className="topbar-social-item fa fa-snapchat-ghost"></a>
                                <a href="#" className="topbar-social-item fa fa-youtube-play"></a>
                            </div>
                        </li>

                        <li className="item-menu-mobile">
                            <a href="index.html">Home</a>
                        </li>

                        <li className="item-menu-mobile">
                            <a href="product.html">Shop</a>
                        </li>

                        <li className="item-menu-mobile">
                            <a href="product.html">Sale</a>
                        </li>

                        <li className="item-menu-mobile">
                            <a href="about.html">About</a>
                        </li>

                        <li className="item-menu-mobile">
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    );
}

export default PublicHeader;