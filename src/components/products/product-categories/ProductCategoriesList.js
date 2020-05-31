import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchProductCategories } from './../../../services/ProductsServices';

import Ingredients from './../../ingredients/index';

const ProductCategoriesList = () => {

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        setLoading(true);

        fetchProductCategories(({ product_categories }) => {
            setCategories(product_categories);
            setLoading(false);
        }, (error) => {
            alert('Error in fetching requests');
            console.log(error);
        })
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div className="card mb-2">
            {loading ? <Ingredients.Loading /> : (
                <div>
                    <div className="d-flex align-items-center justify-content-between flex-column flex-md-row mb-0 mt-4 px-4">
                        <h2>Product Categories</h2>
                        <div className="h5">
                            <span className={`badge ${categories.length ? 'badge-primary' : 'badge-warning'} font-weight-normal`}>{categories.length} categories</span>
                        </div>
                    </div>
                    <hr className="mb-0" />
                    {categories.length === 0 ? (
                        <div className="card-body text-center py-5">
                            <h4 className="mb-3">Looks like there are no product categories.</h4>
                            <Link
                                to='/bo/products/add-category'
                                className='btn btn-primary btn-marketing rounded-pill'
                            >
                                Add Product Category
                            </Link>
                        </div>
                    ) : (
                            <div className="list-group list-group-flush">
                                {categories.map((category, index) => (
                                    <Link
                                        to={`/bo/products/edit-category/${category.id}`}
                                        className="list-group-item list-group-item-action py-4"
                                        key={index}
                                    >
                                        <div className="d-flex justify-content-between">
                                            <div className="mr-4 d-flex">
                                                <div className="icon-stack icon-stack bg-green-soft text-green flex-shrink-0 mr-4"><i data-feather="check"></i></div>
                                                <div>
                                                    <h6>{category.name}</h6>
                                                    <p className="card-text">{category.description}</p>
                                                </div>
                                            </div>
                                            <div className="small flex-shrink-0 text-right">
                                                6 products <br />
                                                <div className="badge badge-green-soft badge-pill text-green">Featured</div><br />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    )
};

export default ProductCategoriesList;