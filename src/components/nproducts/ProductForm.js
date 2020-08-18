import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import {
    upsertProduct,
    fetchProductById
} from './../../services/ProductsServices'

const ProductForm = ({ match }) => {

    const id = match.params.id;

    const [redirect, setRedirect] = useState(null);
    const [formData, setFormData] = useState({
        id: null,
        product_category_id: null,
        name: '',
        description: '',
        sku: '',
        stock: 0.00,
        image_url: '',
        shipping_cost: 0.00,
        handling_cost: 0.00,
        product_cost: 0.00,
        msrp: 0.00,
        markup_percentage: 0.00,
        attributes: null,
    });

    const onSimpleFormChange = (e) => {
        e.preventDefault();

        if (e.target.name === 'product_category_id') {
            setFormData({
                ...formData,
                [e.target.name]: parseInt(e.target.value)
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!formData.name) {
            alert('Please provide product name.');
        } else {

            upsertProduct(formData, ({ product }) => {
                alert(`Successfully ${id ? 'updated' : 'added'} product!`)

                setRedirect('/bo/products');
            }, (error) => {
                alert('Problem in saving product');
                console.log(error);
            });
        }
    }

    useEffect(() => {

        if (id) {
            fetchProductById(id, ({ product }) => {
                setFormData({
                    ...formData,
                    ...product
                });

                // setLoading(false);
            }, (error) => {
                console.log(error);
                setRedirect('/bo/products/categories');
            })
        } else {
        }

    }, []);

    useEffect(() => {
        console.log(formData);
    }, [formData])

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (

        <div className="container-fluid mt-5">
            <div className="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
                <div className="mr-4 mb-3 mb-sm-0">
                    <h1 className="mb-0">Dashboard</h1>
                    <div className="small">
                        <span className="font-weight-500 text-primary">Monday</span> &middot;
                                August 8, 2020 &middot; 04:44 am
                    </div>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-header">
                    Add Product
                </div>

                <div className="card-body">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="row">

                            <div className="col-md-5">
                                <h1>Photos here</h1>
                            </div>

                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="form-group">
                                            <label htmlFor="first-name">Name</label>
                                            <input
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => onSimpleFormChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label htmlFor="first-name">SKU</label>
                                            <input
                                                className="form-control"
                                                id="sku"
                                                name="sku"
                                                type="text"
                                                value={formData.sku}
                                                onChange={(e) => onSimpleFormChange(e)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="first-name">Stock</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">₱</div>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    id="stock"
                                                    name="stock"
                                                    type="number"
                                                    min="0"
                                                    max="500000000"
                                                    value={formData.stock}
                                                    onChange={(e) => onSimpleFormChange(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="first-name">MSRP</label>

                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">₱</div>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    id="msrp"
                                                    name="msrp"
                                                    type="number"
                                                    min="0"
                                                    min="50000"
                                                    value={formData.msrp}
                                                    onChange={(e) => onSimpleFormChange(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="first-name">Markup Percentage</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">%</div>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    id="markup_percentage"
                                                    name="markup_percentage"
                                                    type="number"
                                                    min="0"
                                                    min="3"
                                                    value={formData.markup_percentage}
                                                    onChange={(e) => onSimpleFormChange(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="first-name">Shipping Cost</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">₱</div>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    id="shipping_cost"
                                                    name="shipping_cost"
                                                    type="number"
                                                    min="0"
                                                    min="5000"
                                                    value={formData.shipping_cost}
                                                    onChange={(e) => onSimpleFormChange(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="first-name">Handling Cost</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">₱</div>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    id="handling_cost"
                                                    name="handling_cost"
                                                    type="number"
                                                    min="0"
                                                    min="5000"
                                                    value={formData.handling_cost}
                                                    onChange={(e) => onSimpleFormChange(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="first-name">Product Cost</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">₱</div>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    id="product_cost"
                                                    name="product_cost"
                                                    type="number"
                                                    min="0"
                                                    min="5000"
                                                    value={formData.product_cost}
                                                    onChange={(e) => onSimpleFormChange(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="first-name">Description</label>
                                    <textarea
                                        rows="5"
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        type="text"
                                        value={formData.description}
                                        onChange={(e) => onSimpleFormChange(e)}
                                    />
                                </div>
                            </div>

                            <div className="col-12 text-right">
                                <input type="submit" value="Save" className="btn btn-success" />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ProductForm;