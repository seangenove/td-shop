import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Ingredients from './../ingredients/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import {
    fetchProductCategories,
    deleteProductCategory,
    toggleIsFeaturedProductCategory,
} from './../../services/ProductCategoriesServices';

const ProductCategoriesList = ({ productsBaseURL }) => {

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        setLoading(true);

        fetchProductCategories(({ product_categories }) => {
            console.log(product_categories);
            setCategories(Array.from(product_categories));
            setLoading(false);
        }, (error) => {
            alert('Error in fetching requests');
            console.log(error);
        })
    };

    const onDelete = (category) => {
        const confirmation = window.confirm(`Are you sure you want to delete the ${category.name} category ? ${!category.parent_id ? 'Doing so will also delete all of its subcategories.' : ''}`);

        if (confirmation) {
            deleteProductCategory(category.id, ({ product_category }) => {
                alert('Successfully deleted category!');

                getCategories();
            }, (error) => {
                console.log(error);
            });
        }
    };

    const onToggleFeatured = (category) => {
        const confirmation = window.confirm(`Are you sre you want to ${category.is_featured ? 'unfeature' : 'feature'} the ${category.name} category?`);

        if (confirmation) {
            toggleIsFeaturedProductCategory(category.id, ({ product_category }) => {
                alert(`Successfully ${category.is_featured ? 'unfeatured' : 'featured'} ${category.name} category!`);

                getCategories();
            }, (error) => {
                console.log(error);
            });
        }
    };

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
                                <input className="form-control form-control-solid form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
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
                                    <div key={index}>
                                        <div className="list-group-item list-group-item-action pb-3">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <div>
                                                        <h6 className="mb-0">{category.name}</h6>
                                                        <div className="mb-2">
                                                            <a
                                                                href="#!"
                                                                className={`badge badge-${category.is_featured ? 'success-soft' : 'light'} badge-pill ${category.is_featured ? 'text-success' : ''} mr-1`}
                                                                onClick={() => onToggleFeatured(category)}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                {category.is_featured ? 'Featured' : 'Not Featured'}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="small text-gray-400 flex-shrink-0 text-right">
                                                    <div className='pt-2 btn-group'>
                                                        <Link
                                                            to={`/bo/products/categories/add-product?pid=${category.id}`}
                                                            className="btn btn-light btn-sm mr-1">
                                                            <FontAwesomeIcon icon={faPlus} />
                                                            <div className='d-none d-md-block ml-2'>Add Product</div>
                                                        </Link>
                                                        <Link
                                                            to={`/bo/products/categories/edit/${category.id}`}
                                                            className="btn btn-light btn-sm mr-1">
                                                            <FontAwesomeIcon icon={faEdit} />
                                                            <div className='d-none d-md-block ml-2'>Edit</div>
                                                        </Link>
                                                        <button
                                                            className="btn btn-light btn-sm"
                                                            onClick={() => onDelete(category)}
                                                        >
                                                            <FontAwesomeIcon icon={faTrash} />
                                                            <div className='d-none d-md-block ml-2'>Delete</div>
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
                                                                <a
                                                                    href="#!"
                                                                    className={`badge badge-${childCategory.is_featured ? 'success-soft' : 'light'} badge-pill ${childCategory.is_featured ? 'text-success' : ''} mr-1`}
                                                                    onClick={() => onToggleFeatured(childCategory)}
                                                                    style={{ cursor: 'pointer' }}
                                                                >
                                                                    {childCategory.is_featured ? 'Featured' : 'Not Featured'}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="small text-gray-400 flex-shrink-0 text-right">
                                                        <div className='pt-2'>
                                                            <Link
                                                                to={`/bo/products/categories/add-product?pid=${childCategory.id}`}
                                                                className="btn btn-light btn-sm mr-1">
                                                                <FontAwesomeIcon icon={faPlus} />
                                                                <div className='d-none d-md-block ml-2'>Add Product</div>
                                                            </Link>
                                                            <Link
                                                                to={`/bo/products/categories/edit/${childCategory.id}`}
                                                                className="btn btn-light btn-sm mr-1">
                                                                <FontAwesomeIcon icon={faEdit} />
                                                                <div className='d-none d-md-block ml-2'>Edit</div>
                                                            </Link>
                                                            <button
                                                                className="btn btn-light btn-sm"
                                                                onClick={() => onDelete(childCategory)}
                                                            >
                                                                <FontAwesomeIcon icon={faTrash} />
                                                                <div className='d-none d-md-block ml-2'>Delete</div>
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