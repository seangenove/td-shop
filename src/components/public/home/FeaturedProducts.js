import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Slider from "react-slick";

const PrevArrow = ({ style, onClick }) => (
    <button className="arrow-slick2 prev-slick2" style={{ ...style }} onClick={onClick}>
        <FontAwesomeIcon icon={faAngleLeft} aria-hidden="true" />
    </button>
)
const NextArrow = ({ style, onClick }) => (
    <button className="arrow-slick2 next-slick2" style={{ ...style }} onClick={onClick}>
        <FontAwesomeIcon icon={faAngleRight} aria-hidden="true" />
    </button>
)

const FeaturedProducts = () => {

    const imgStyle = {
        objectFit: 'cover',
        height: '360px',
        overflow: "hidden",
        objectPosition: "50% -0%"
    }

    const sliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <section className="newproduct bgwhite p-t-45 p-b-105">
            <div className="container">
                <div className="sec-title p-b-60">
                    <h3 className="m-text5 t-center">
                        Featured Products
				</h3>
                </div>

                <Slider {...sliderSettings}>

                    <div className="item-slick2 p-l-15 p-r-15">

                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                                <img src="photos/IMG_7783.JPG" alt="IMG-PRODUCT" style={imgStyle} />

                                <div className="block2-overlay trans-0-4">
                                    <a href="#!" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                        <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                        <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                    </a>

                                    <div className="block2-btn-addcart w-size1 trans-0-4">

                                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Add to Cart
										</button>
                                    </div>
                                </div>
                            </div>

                            <div className="block2-txt p-t-20">
                                <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                    Herschel supply co 25l
								</a>

                                <span className="block2-price m-text6 p-r-5">
                                    $75.00
								</span>
                            </div>
                        </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15">

                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative">
                                <img src="photos/IMG_7783.JPG" alt="IMG-PRODUCT" style={imgStyle} />

                                <div className="block2-overlay trans-0-4">
                                    <a href="#!" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                        <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                        <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                    </a>

                                    <div className="block2-btn-addcart w-size1 trans-0-4">

                                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Add to Cart
										</button>
                                    </div>
                                </div>
                            </div>

                            <div className="block2-txt p-t-20">
                                <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                    Denim jacket blue
								</a>

                                <span className="block2-price m-text6 p-r-5">
                                    $92.50
								</span>
                            </div>
                        </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15">

                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative">
                                <img src="photos/IMG_7783.JPG" alt="IMG-PRODUCT" style={imgStyle} />

                                <div className="block2-overlay trans-0-4">
                                    <a href="#!" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                        <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                        <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                    </a>

                                    <div className="block2-btn-addcart w-size1 trans-0-4">

                                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Add to Cart
										</button>
                                    </div>
                                </div>
                            </div>

                            <div className="block2-txt p-t-20">
                                <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                    Coach slim easton black
								</a>

                                <span className="block2-price m-text6 p-r-5">
                                    $165.90
								</span>
                            </div>
                        </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15">

                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                                <img src="photos/IMG_7783.JPG" alt="IMG-PRODUCT" style={imgStyle} />

                                <div className="block2-overlay trans-0-4">
                                    <a href="#!" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                        <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                        <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                    </a>

                                    <div className="block2-btn-addcart w-size1 trans-0-4">

                                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Add to Cart
										</button>
                                    </div>
                                </div>
                            </div>

                            <div className="block2-txt p-t-20">
                                <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                    Frayed denim shorts
								</a>

                                <span className="block2-oldprice m-text7 p-r-5">
                                    $29.50
								</span>

                                <span className="block2-newprice m-text8 p-r-5">
                                    $15.90
								</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-slick2 p-l-15 p-r-15">

                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                                <img src="photos/IMG_7783.JPG" alt="IMG-PRODUCT" style={imgStyle} />

                                <div className="block2-overlay trans-0-4">
                                    <a href="#!" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                        <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                        <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                    </a>

                                    <div className="block2-btn-addcart w-size1 trans-0-4">

                                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Add to Cart
										</button>
                                    </div>
                                </div>
                            </div>

                            <div className="block2-txt p-t-20">
                                <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                    Frayed denim shorts
								</a>

                                <span className="block2-oldprice m-text7 p-r-5">
                                    $29.50
								</span>

                                <span className="block2-newprice m-text8 p-r-5">
                                    $15.90
								</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-slick2 p-l-15 p-r-15">

                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                                <img src="photos/955EF613-F332-4768-BABA-32AC2E08BD48.jpg" alt="IMG-PRODUCT" style={imgStyle} />

                                <div className="block2-overlay trans-0-4">
                                    <a href="#!" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                        <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                        <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                    </a>

                                    <div className="block2-btn-addcart w-size1 trans-0-4">

                                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Add to Cart
										</button>
                                    </div>
                                </div>
                            </div>

                            <div className="block2-txt p-t-20">
                                <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                    Frayed denim shorts
								</a>

                                <span className="block2-oldprice m-text7 p-r-5">
                                    $29.50
								</span>

                                <span className="block2-newprice m-text8 p-r-5">
                                    $15.90
								</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-slick2 p-l-15 p-r-15">

                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                                <img src="photos/955EF613-F332-4768-BABA-32AC2E08BD48.jpg" alt="IMG-PRODUCT" style={imgStyle} />

                                <div className="block2-overlay trans-0-4">
                                    <a href="#!" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                        <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                        <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                    </a>

                                    <div className="block2-btn-addcart w-size1 trans-0-4">

                                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Add to Cart
										</button>
                                    </div>
                                </div>
                            </div>

                            <div className="block2-txt p-t-20">
                                <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                    Frayed denim shorts
								</a>

                                <span className="block2-oldprice m-text7 p-r-5">
                                    $29.50
								</span>

                                <span className="block2-newprice m-text8 p-r-5">
                                    $15.90
								</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default FeaturedProducts;