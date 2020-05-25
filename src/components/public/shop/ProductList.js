import React from 'react';

const ProductList = () => {

    const imgStyle = {
        objectFit: 'cover',
        height: '359px',
        overflow: "hidden",
        objectPosition: "50% -0%"
    }

    return (
        <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
            <div className="flex-sb-m flex-w p-b-35 d-flex justify-content-end">
                <span className="s-text8 p-t-5 p-b-5">
                    Showing 1–12 of 16 results
                    </span>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    <div className="block2">
                        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                            <img src="photos/DXDSHirt_IG_left.jpg" alt="IMG-PRODUCT" style={imgStyle} />
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
                                DXD Collab Shirt
                            </a>

                            <span className="block2-price m-text6 p-r-5">
                                ₱ 900.00
									</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    <div className="block2">
                        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                            <img src="photos/20200215_184356_328.jpg" alt="IMG-PRODUCT" style={imgStyle} />
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
                                Trggrd Hoodie
									</a>

                            <span className="block2-price m-text6 p-r-5">
                                ₱ 750.00
							</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    <div className="block2">
                        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                            <img src="photos/s.png" alt="IMG-PRODUCT" style={imgStyle} />
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
                                TRGGRD Statement shirt
									</a>

                            <span className="block2-price m-text6 p-r-5">
                                ₱ 75.00
									</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;
