import React from 'react';

const InstagramSection = () => {

    const imgStyle = {
        objectFit: 'cover',
        height: '504px',
        overflow: "hidden",
        objectPosition: "50% -0%"
    }

    return (
        <section class="instagram p-t-20">
            <div class="sec-title p-b-54 p-l-15 p-r-15">
                <h3 class="m-text5 t-center">
                    Follow us on Instagram
			    </h3>
                <p class="m-text5 t-center">@dclnchr @trggrdco</p>
            </div>

            <div class="flex-w">

                <div class="block4 wrap-pic-w">
                    <img src="photos/IMG_7783.JPG" alt="IMG-INSTAGRAM" style={imgStyle}/>
                    <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
                        <span class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                            <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                            <span class="p-t-2">39</span>
                        </span>
                        <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                            <p class="s-text10 m-b-15 h-size1 of-hidden">
                                Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
						</p>
                            <span class="s-text9">
                                Photo by @nancyward
						</span>
                        </div>
                    </a>
                </div>

                <div class="block4 wrap-pic-w">
                    <img src="photos/IMG_7494.jpg" alt="IMG-INSTAGRAM" style={imgStyle}/>

                    <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
                        <span class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                            <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                            <span class="p-t-2">39</span>
                        </span>

                        <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                            <p class="s-text10 m-b-15 h-size1 of-hidden">
                                Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
						</p>

                            <span class="s-text9">
                                Photo by @nancyward
						</span>
                        </div>
                    </a>
                </div>


                <div class="block4 wrap-pic-w">
                    <img src="photos/20200215_184356_328.jpg" alt="IMG-INSTAGRAM" style={imgStyle}/>

                    <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
                        <span class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                            <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                            <span class="p-t-2">39</span>
                        </span>

                        <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                            <p class="s-text10 m-b-15 h-size1 of-hidden">
                                Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
						</p>

                            <span class="s-text9">
                                Photo by @nancyward
						</span>
                        </div>
                    </a>
                </div>


                <div class="block4 wrap-pic-w">
                    <img src="photos/IMG_7769.JPG" alt="IMG-INSTAGRAM" style={imgStyle}/>

                    <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
                        <span class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                            <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                            <span class="p-t-2">39</span>
                        </span>

                        <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                            <p class="s-text10 m-b-15 h-size1 of-hidden">
                                Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
						</p>

                            <span class="s-text9">
                                Photo by @nancyward
						</span>
                        </div>
                    </a>
                </div>


                <div class="block4 wrap-pic-w">
                    <img src="photos/IMG_0034.PNG" alt="IMG-INSTAGRAM" style={imgStyle}/>

                    <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
                        <span class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                            <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                            <span class="p-t-2">39</span>
                        </span>

                        <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                            <p class="s-text10 m-b-15 h-size1 of-hidden">
                                Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
						</p>

                            <span class="s-text9">
                                Photo by @nancyward
						</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default InstagramSection;