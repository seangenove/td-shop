import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Slider from "react-slick";

const PrevArrow = ({ style, onClick }) => (
    <button className="arrow-slick1 prev-slick1" style={{ ...style }} onClick={onClick}>
        <FontAwesomeIcon icon={faAngleLeft} aria-hidden="true" />
    </button>
)

const NextArrow = ({ style, onClick }) => (
    <button className="arrow-slick1 next-slick1" style={{ ...style }} onClick={onClick} >
        <FontAwesomeIcon icon={faAngleRight} aria-hidden="true" />
    </button>
)

const MainSlider = () => {

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        infinite: true,
        
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }

    return (
        <section className="slide1">
            <div className="wrap-slick1">
                <Slider {...sliderSettings}>

                    <div>
                        <div className="item-slick1 item1-slick1" style={{ backgroundImage: `url(photos/0C6F8679-CD1B-4D26-997E-CB0D1CDC5617.jpg)` }}>
                            <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-150">
                                <span className="caption1-slide1 m-text1 t-center m-b-10" >
                                    Velvet Collection 2020
						        </span>

                                <h2 className="caption2-slide1 xl-text1 t-center  m-b-30" >
                                    New arrivals
						        </h2>

                                <div className="wrap-btn-slide1 w-size1 " >
                                    <Link to='/shop' className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="item-slick1 item2-slick1" style={{ backgroundImage: `url(photos/IMG_4416.jpeg)` }}>
                            <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                                <span className="caption1-slide1 m-text1 t-center m-b-10" >
                                    Velvet Collection 2020
						        </span>

                                <h2 className="caption2-slide1 xl-text1 t-center  m-b-30" >
                                    New arrivals
						        </h2>

                                <div className="wrap-btn-slide1 w-size1 " >
                                    <Link to='/shop' className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="item-slick1 item3-slick1" style={{ backgroundImage: `url(photos/0C6F8679-CD1B-4D26-997E-CB0D1CDC5617.jpg)` }}>
                            <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                                <span className="caption1-slide1 m-text1 t-center m-b-10" >
                                    Velvet Collection 2020
						        </span>

                                <h2 className="caption2-slide1 xl-text1 t-center  m-b-30" >
                                    New arrivals
						        </h2>

                                <div className="wrap-btn-slide1 w-size1 " >

                                    <Link to='/shop' className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section >
    )
}

export default MainSlider