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
        name: null,
        description: null,
        sku: null,
        stock: null,
        image_url: null,
        shipping_cost: null,
        handling_cost: null,
        product_cost: null,
        final_cost: null,
        msrp: null,
        markup_percentage: null,
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

    }, [])

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (

        <div class="container-fluid mt-5">
            <div class="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
                <div class="mr-4 mb-3 mb-sm-0">
                    <h1 class="mb-0">Dashboard</h1>
                    <div class="small">
                        <span class="font-weight-500 text-primary">Monday</span> &middot;
                                August 8, 2020 &middot; 04:44 am
                    </div>
                </div>
            </div>


            <div class="card mb-4">
                <div class="card-header">
                    Add Product
                </div>

                <div class="card-body">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="row">

                            <div className="col-md-6">
                                <div class="form-group">
                                    <label for="first-name">Name</label>
                                    <input
                                        class="form-control"
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => onSimpleFormChange(e)}
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="first-name">SKU</label>
                                    <input
                                        class="form-control"
                                        id="sku"
                                        name="sku"
                                        type="text"
                                        value={formData.sku}
                                        onChange={(e) => onSimpleFormChange(e)}
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="first-name">Stock</label>
                                    <input
                                        class="form-control"
                                        id="stock"
                                        name="stock"
                                        type="text"
                                        value={formData.stock}
                                        onChange={(e) => onSimpleFormChange(e)}
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="first-name">MSRP</label>
                                    <input
                                        class="form-control"
                                        id="msrp"
                                        name="msrp"
                                        type="text"
                                        value={formData.msrp}
                                        onChange={(e) => onSimpleFormChange(e)}
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="first-name">Description</label>
                                    <textarea
                                        rows="4"
                                        class="form-control"
                                        id="description"
                                        name="description"
                                        type="text"
                                        value={formData.description}
                                        onChange={(e) => onSimpleFormChange(e)}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div class="form-group">
                                    <label for="first-name">Shipping Cost</label>
                                    <input
                                        class="form-control"
                                        id="shipping_cost"
                                        name="shipping_cost"
                                        type="text"
                                        value={formData.shipping_cost}
                                        onChange={(e) => onSimpleFormChange(e)}
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="first-name">Handling Cost</label>
                                    <input
                                        class="form-control"
                                        id="handling_cost"
                                        name="handling_cost"
                                        type="text"
                                        value={formData.handling_cost}
                                        onChange={(e) => onSimpleFormChange(e)}
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="first-name">Product Cost</label>
                                    <input
                                        class="form-control"
                                        id="product_cost"
                                        name="product_cost"
                                        type="text"
                                        value={formData.product_cost}
                                        onChange={(e) => onSimpleFormChange(e)}
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="first-name">Final Cost</label>
                                    <input
                                        class="form-control"
                                        id="final_cost"
                                        name="final_cost"
                                        type="text"
                                        value={formData.final_cost}
                                        onChange={(e) => onSimpleFormChange(e)}
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="first-name">Markup Percentage</label>
                                    <input
                                        class="form-control"
                                        id="markup_percentage"
                                        name="markup_percentage"
                                        type="text"
                                        value={formData.markup_percentage}
                                        onChange={(e) => onSimpleFormChange(e)}
                                    />
                                </div>
                            </div>

                            <div class="col-12 text-right">
                                <input type="submit" value="Save" class="btn btn-success" />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ProductForm;