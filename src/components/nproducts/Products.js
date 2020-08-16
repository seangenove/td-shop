import React from 'react';

const Products = () => {

    return (
        <div>
            <div class="container-fluid mt-5">

                <div class="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
                    <div class="mr-4 mb-3 mb-sm-0">
                        <h1 class="mb-0">Dashboard</h1>
                        <div class="small">
                            <span class="font-weight-500 text-primary">Sunday</span> &middot;
                                August 16, 2020 &middot; 07:39 am
                            </div>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-header">Products</div>
                    <div class="card-body">
                        <table class="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th>SKU</th>
                                    <th>Name</th>
                                    <th>Stock</th>
                                    <th>MSRP</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div> 
    )

}

export default Products;