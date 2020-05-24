import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => (
    <div className="flex-m p-t-30">
        <a href="https://www.facebook.com/dclnchr/">
            <FontAwesomeIcon icon={faFacebook} className="fs-18 color1 p-r-20" />
        </a>
        <a href="https://www.instagram.com/dclnchr/" >
            <FontAwesomeIcon icon={faInstagram} className="fs-18 color1 p-r-20" />
        </a>
    </div>
);

const PublicFooter = () => {

    return (
        <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
            <div className="flex-w p-b-90">
                <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
                    <h4 className="s-text12 p-b-30">GET IN TOUCH</h4>

                    <div>
                        <p className="s-text7 w-size27">
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (1) 96 716 6879
					    </p>
                    </div>
                </div>

                <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                    <h4 className="s-text12 p-b-30">Categories</h4>

                    <ul>
                        <li className="p-b-9">
                            <Link to='/shop' className="s-text7">Overalls</Link>
                        </li>
                        <li className="p-b-9">
                            <Link to='/shop' className="s-text7">Shirts</Link>
                        </li>
                        <li className="p-b-9">
                            <Link to='/shop' className="s-text7">Polos</Link>
                        </li>
                        <li className="p-b-9">
                            <Link to='/shop' className="s-text7">Hoodies</Link>
                        </li>
                        <li className="p-b-9">
                            <Link to='/shop' className="s-text7">Velvet Suits</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                    <h4 className="s-text12 p-b-30">Links</h4>

                    <ul>
                        <li className="p-b-9">
                            <Link to='/about-us' className="s-text7">About Us</Link>
                        </li>
                        <li className="p-b-9">
                            <Link to='/about-us' className="s-text7">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
                    <h4 className="s-text12 p-b-30">Help</h4>

                    <ul>
                        <li className="p-b-9">
                            <Link to='/track-order' className="s-text7">Track Order</Link>
                        </li>
                        <li className="p-b-9">
                            <Link to='/faq' className="s-text7">FAQs</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
                    <h4 className="s-text12 p-b-30">Newsletter</h4>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="effect1 w-size9">
                            <input className="s-text7 bg6 w-full p-b-5" type="text" name="email" placeholder="email@example.com" />
                            <span className="effect1-line"></span>
                        </div>

                        <div className="w-size2 p-t-20">
                            <button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4" onClick={(e) => e.preventDefault()}>
                                Subscribe
						    </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="t-center p-l-15 p-r-15">
                <div className="t-center s-text8 p-t-20">
                    Copyright © Trench Dev 2020 All rights reserved.
			    </div>
            </div>
        </footer>
    )
}

export default PublicFooter;