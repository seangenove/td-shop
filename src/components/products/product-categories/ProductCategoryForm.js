import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { fetchProductCategoryById, upsertProductCategory } from './../../../services/ProductsServices'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import Ingredients from './../../ingredients/index';

const ProductCategoryForm = ({ match }) => {

    const id = match.params.id;

    const [redirect, setRedirect] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        is_featured: false
    });

    const onSimpleFormChange = (e) => {
        e.preventDefault();

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!formData.name) {
            alert('Please provide product name.');
        } else {

            upsertProductCategory(formData, ({ product_category }) => {
                alert(`Successfully ${id ? 'updated' : 'added'} category!`)

                setRedirect('/bo/products/categories');
            }, (error) => {
                alert('Problem in saving product category');
                console.log(error);
            });
        }
    }

    useEffect(() => {
        if (id) {
            setLoading(true);

            fetchProductCategoryById(id, ({ product_category }) => {
                setFormData({
                    ...formData,
                    id: product_category.id,
                    name: product_category.name,
                    is_featured: product_category.is_featured
                });
                setLoading(false);
            }, (error) => {
                console.log(error);
                setRedirect('/bo/products/categories');
            })
        }
    }, []);

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <div className="card mb-4">
            {loading ? <Ingredients.Loading /> : (
                <div>

                    <div className="d-flex align-items-center justify-content-center flex-column flex-md-row my-4 px-4">
                        <h2 className="mb-0 mt-2">
                            {id ? 'Edit' : 'Add'} Product Category
                        </h2>
                    </div>
                    <hr className="mb-0" />
                    <div className="card-body">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    className="form-control form-control-solid"
                                    type="text"
                                    placeholder="Enter Category Name"
                                    name="name"
                                    maxLength="50"
                                    value={formData.name}
                                    onChange={(e) => onSimpleFormChange(e)}
                                />
                            </div>

                            <div className="d-flex justify-content-between">
                                <div className="custom-control custom-checkbox custom-control-solid">
                                    <input
                                        className="custom-control-input"
                                        id="test"
                                        type="checkbox"
                                        name="is_featured"
                                        checked={formData.is_featured}
                                        onChange={() => setFormData({
                                            ...formData,
                                            is_featured: !formData.is_featured
                                        })}
                                    />
                                    <label className="custom-control-label" htmlFor="test">Featured</label>
                                </div>

                                <button className="btn btn-primary rounded-pill px-4 mr-2 my-1" onClick={(e) => onSubmit(e)}>
                                    <FontAwesomeIcon icon={faUpload} className="mr-2" /> Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
};

export default ProductCategoryForm;