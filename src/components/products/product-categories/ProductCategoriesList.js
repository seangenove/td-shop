import React, { useState } from 'react';

const ProductCategoriesList = () => {
    return (
        <div>
            <div className="card mb-2">
                <div className="d-flex align-items-center justify-content-between flex-column flex-md-row mb-0 mt-4 px-4">
                    <h2>Product Categories</h2>
                    <div className="h5"><span className="badge badge-primary font-weight-normal">2 categories</span></div>
                </div>
                <hr className="mb-0" />
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action py-4" href="#!">
                        <div className="d-flex justify-content-between">
                            <div className="mr-4 d-flex">
                                <div className="icon-stack icon-stack bg-green-soft text-green flex-shrink-0 mr-4"><i data-feather="check"></i></div>
                                <div>
                                    <h6>Shirts</h6>
                                    <p className="card-text">Thank you for using our service. This case is now being marked as closed. If you would like to reopen this case, please reply to this message.</p>
                                </div>
                            </div>
                            <div className="small flex-shrink-0 text-right">
                                6 products <br />
                                <div className="badge badge-green-soft badge-pill text-green">Enabled</div><br />
                            </div>
                        </div>
                    </a>
                    <a className="list-group-item list-group-item-action py-4" href="#!">
                        <div className="d-flex justify-content-between">
                            <div className="mr-4 d-flex">
                                <div className="icon-stack icon-stack bg-red-soft text-red flex-shrink-0 mr-4"><i data-feather="x"></i></div>
                                <div>
                                    <h6>Hoodies</h6>
                                    <p className="card-text">Your request has been declined. Thank you for using our service. This case is now being marked as closed. If you would like to reopen this case, please reply to this message.</p>
                                </div>
                            </div>
                            <div className="small flex-shrink-0 text-right">
                                2 products <br />
                                <div className="badge badge-green-soft badge-pill text-green">Disabled</div><br />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ProductCategoriesList;