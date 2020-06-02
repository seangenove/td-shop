import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchProductCategories } from './../../../services/ProductsServices';

import Ingredients from './../../ingredients/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const ProductCategoriesList = ({ productsBaseURL }) => {

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        setLoading(true);

        fetchProductCategories(({ product_categories }) => {
            console.log(product_categories);
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
                        <div>
                            <h2>Product Categories</h2>
                        </div>
                        <div className='d-flex align-items-right justify-content-between'>
                            <Link
                                to={`/bo/products/categories/add`}
                                className="btn btn-primary-soft btn-sm mr-2"
                            >
                                <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Category
                            </Link>
                            <form className="form-inline mr-auto">
                                <input className="form-control form-control-solid mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>

                    </div>
                    <hr className="mb-0" />
                    {categories.length === 0 ? (
                        <div className="card-body text-center py-5">
                            <h4 className="mb-3">Looks like there are no product categories.</h4>
                            <Link
                                to='/bo/products/categories/add'
                                className='btn btn-primary-soft btn-marketing rounded-pill'
                            >
                                Add Product Category
                            </Link>
                        </div>
                    ) : (
                            <div className="list-group list-group-flush">
                                {categories.map((category, index) => (
                                    <div>
                                        <div className="list-group-item list-group-item-action pb-3" key={index}>
                                            <div className="d-flex justify-content-between">
                                                <div className="mr-4 d-flex">
                                                    <div>
                                                        <h6 className="mb-0">{category.name}</h6>
                                                        <div className="mb-2">
                                                            <div className={`badge badge-${category.is_featured ? 'green' : 'red'}-soft badge-pill text-${category.is_featured ? 'green' : 'red'} mr-1`}>
                                                                {category.is_featured ? 'Featured' : 'Not Featured'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="small flex-shrink-0 text-right">
                                                    <div className='pt-3'>
                                                        <Link
                                                            to={`/bo/products/categories/add-product?pid=${category.id}`}
                                                            className="btn btn-light btn-sm mr-2">
                                                            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Product
                                                    </Link>
                                                        <Link
                                                            to={`/bo/products/categories/edit/${category.id}`}
                                                            className="btn btn-light btn-sm mr-2">
                                                            <FontAwesomeIcon icon={faEdit} className="mr-2" /> Edit
                                                    </Link>
                                                        <button className="btn btn-light btn-sm mr-2">
                                                            <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {category.children && category.children.map((childCategory, childIndex) => (
                                            <div className="list-group-item list-group-item-action pb-3" key={childIndex}>
                                                <div className="d-flex justify-content-between">
                                                    <div className="ml-3 d-flex">
                                                        <div>
                                                            <h6 className="mb-0">{childCategory.name}</h6>
                                                            <div className="mb-2">
                                                                <div className={`badge badge-${childCategory.is_featured ? 'green' : 'red'}-soft badge-pill text-${childCategory.is_featured ? 'green' : 'red'} mr-1`}>
                                                                    {childCategory.is_featured ? 'Featured' : 'Not Featured'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="small flex-shrink-0 text-right">
                                                        <div className='pt-3'>
                                                            <Link
                                                                to={`/bo/products/categories/add-product?pid=${childCategory.id}`}
                                                                className="btn btn-light btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Product
                                                    </Link>
                                                            <Link
                                                                to={`/bo/products/categories/edit/${childCategory.id}`}
                                                                className="btn btn-light btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faEdit} className="mr-2" /> Edit
                                                    </Link>
                                                            <button className="btn btn-light btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete
                                                    </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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