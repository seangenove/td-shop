import React from 'react';

const Banner = () => {
    return (
        <section className="parallax0 parallax100" style={{ backgroundImage: `url(photos/IMG_0694.PNG)` }}>
            <div className="overlay0 p-t-190 p-b-200">
                <div className="flex-col-c-m p-l-15 p-r-15">
                    <span className="m-text9 p-t-45 fs-20-sm">
                        The Beauty
				</span>

                    <h3 className="l-text1 fs-35-sm">
                        Lookbook
				</h3>

                    <span className="btn-play s-text4 hov5 cs-pointer p-t-25" data-toggle="modal" data-target="#modal-video-01">
                        <i className="fa fa-play" aria-hidden="true"></i>
                        Play Video
				</span>
                </div>
            </div>
        </section>
    );
}

export default Banner;
