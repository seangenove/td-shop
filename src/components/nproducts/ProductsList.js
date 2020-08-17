import React, { useState, useEffect } from 'react';

import Ingredients from './../ingredients/index';

import { fetchProducts } from './../../services/ProductsServices'

const ProductsList = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState({});

    const getProducts = () => {
        setLoading(true);

        fetchProducts(({ products }) => {
            console.log(products);

            setProducts(products);

            setLoading(false);
        }, (error) => {
            alert('Error in fetching requests');
            console.log(error);
        });
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
                    <div className="mr-4 mb-3 mb-sm-0">
                        <h1 className="mb-0">Dashboard</h1>
                        <div className="small">
                            <span className="font-weight-500 text-primary">Sunday</span> &middot;
                                August 16, 2020 &middot; 07:39 am
                            </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">Products</div>
                    <div className="card-body">
                        <table className="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>SKU</th>
                                    <th>Category</th>
                                    <th>Stock</th>
                                    <th>MSRP</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { loading ? <Ingredients.Loading /> : products.map((product, index) => (
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.sku}</td>
                                        <td>{product.product_category_id}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.msrp}</td>
                                        <td>test</td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductsList;