import React, { useState } from 'react';

import { upsertProductCategory } from './../../../services/ProductsServices'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const ProductCategoriesList = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: ''
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

        if (!formData.name || !formData.description) {
            alert('Please provide product name and description.');
        } else {

            upsertProductCategory(formData, ({ product_category }) => {
                alert('Successfully added category!')
                console.log('New product category', product_category)

                setFormData({
                    name: '',
                    description: ''
                })
            }, (error) => {
                alert('Error');
                console.log(error);
            });
        }
    }

    return (
        <div className="card mb-4">
            <div className="d-flex align-items-center justify-content-between flex-column flex-md-row mt-4 px-4">
                <h2 className="mb-0 mt-2">Add Product Category</h2>

                <button className="btn btn-primary rounded-pill px-4 mr-2 my-1" onClick={(e) => onSubmit(e)}>
                    <FontAwesomeIcon icon={faUpload} className="mr-2" /> Save
                </button>

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

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea
                            className="form-control form-control-solid"
                            name="description"
                            rows="3"
                            placeholder="Enter description"
                            maxLength="250"
                            value={formData.description}
                            onChange={(e) => onSimpleFormChange(e)}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default ProductCategoriesList;