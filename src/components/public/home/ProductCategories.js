import React from 'react';

const ProductCategories = () => {

    const imgStyleSmall = {
        objectFit: 'cover',
        height: '338px',
        overflow: "hidden",
        objectPosition: "50% -0%"
    }

    const imgStyleBig = {
        objectFit: 'cover',
        height: '478px',
        overflow: "hidden",
    }

    return (
        <section className="banner bgwhite p-t-40 p-b-40">
            <div className="container">
                <div class="sec-title p-b-44">
                    <h3 class="m-text5 t-center">Our Products</h3>
                </div>

                <div className="row">
                    <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <img src="photos/202001133758624425016757419.jpg" alt="IMG-BENNER" style={imgStyleBig} />
                            <div className="block1-wrapbtn w-size2">
                                <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    Overalls
							    </a>
                            </div>
                        </div>


                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <img src="photos/955EF613-F332-4768-BABA-32AC2E08BD48.jpg" alt="IMG-BENNER" style={imgStyleSmall} />
                            <div className="block1-wrapbtn w-size2">
                                <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    SHIRTS
						        </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <img src="photos/IMG_7779.jpg" alt="IMG-BENNER" style={imgStyleSmall} />
                            <div className="block1-wrapbtn w-size2">
                                <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    POLOS
							    </a>
                            </div>
                        </div>

                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <img src="photos/IMG_7521.jpg" alt="IMG-BENNER" style={imgStyleBig} />
                            <div className="block1-wrapbtn w-size2">
                                <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    Hoodies
							    </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">

                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <img src="photos/IMG_7767.JPG" alt="IMG-BENNER" style={imgStyleBig} />
                            <div className="block1-wrapbtn w-size2">
                                <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    Velvet Suits
							    </a>
                            </div>
                        </div>


                        <div className="block2 wrap-pic-w pos-relative m-b-30">
                            <img src="fashe/images/icons/bg-01.jpg" alt="IMG" />
                            <div className="block2-content sizefull ab-t-l flex-col-c-m">
                                <h4 className="m-text4 t-center w-size3 p-b-8">
                                    Sign up & get 20% off
							    </h4>
                                <p className="t-center w-size4">
                                    Be the frist to know about the latest fashion news and get exclusive offers
							    </p>
                                <div className="w-size2 p-t-25">
                                    <a href="#" className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                                        Sign Up
								    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCategories;
