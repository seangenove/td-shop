import React, { useState, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import {
    fetchParentProductCategories,
    fetchProductCategoryById,
    upsertProductCategory
} from './../../../services/ProductCategoriesServices'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import Ingredients from './../../ingredients/index';

const ProductCategoryForm = ({ match }) => {

    const id = match.params.id;

    const [redirect, setRedirect] = useState(null);
    const [loading, setLoading] = useState(false);
    const [parentCategories, setParentCategories] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        is_featured: false,
        parent_id: null
    });

    const onSimpleFormChange = (e) => {
        e.preventDefault();

        if (e.target.name === 'parent_id') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value === "None" ? null : parseInt(e.target.value)
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
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
        setLoading(true);

        fetchParentProductCategories(({ parent_categories }) => {
            console.log(parent_categories);
            setParentCategories(parent_categories);

            if (id) {
                setLoading(true);

                fetchProductCategoryById(id, ({ product_category }) => {
                    setFormData({
                        ...formData,
                        id: product_category.id,
                        name: product_category.name,
                        is_featured: product_category.is_featured,
                        parent_id: product_category.parent_id
                    });

                    setLoading(false);
                }, (error) => {
                    console.log(error);
                    setRedirect('/bo/products/categories');
                })
            } else {
                setLoading(false);
            }
        }, (error) => {
            alert('Error in fetching requests');
            console.log(error);
        });

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
                                <label htmlFor="name">Parent Category</label>
                                <select
                                    name="parent_id"
                                    className='form-control'
                                    required
                                    value={formData.parent_id === null ? 'None' : formData.parent_id}
                                    onChange={(e) => onSimpleFormChange(e)}
                                >
                                    <option value={null}>None</option>
                                    {parentCategories && parentCategories.map((parentCategory) => (
                                        <Fragment>
                                        {
                                            parentCategory.id !== formData.id && (
                                                <option value={parentCategory.id} >
                                                    {parentCategory.name}
                                                </option>
                                            )
                                        }
                                        </Fragment>
                                    ))}
                                </select>
                            </div>

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