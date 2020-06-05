import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faListUl, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import ProductCategoryForm from './product-categories/ProductCategoryForm';
import ProductCategoriesList from './product-categories/ProductCategoriesList';

const Products = ({ match }) => {

    const productsBaseURL = match.path;

    return (
        <section className="bg-light pt-5">
            <div className="container">
                <div className="row">
                    <SidePanel productsBaseURL={productsBaseURL} />

                    <div className="col-lg-8 col-xl-9">
                        <Route exact path={`${productsBaseURL}/categories`} component={ProductCategoriesList}  />
                        <Route exact path={`${productsBaseURL}/categories/add`} component={ProductCategoryForm} />
                        <Route exact path={`${productsBaseURL}/categories/edit/:id`} component={ProductCategoryForm} />
                    </div>
                </div>
            </div>
        </section>
    )
}

const SidePanel = ({ productsBaseURL }) => (
    <div className="col-lg-4 col-xl-3 mb-4">
        <div className="card nav-sticky">
            <div className="list-group list-group-flush small">
                 <NavLink
                    exact
                    to={`${productsBaseURL}/categories`}
                    activeClassName='active'
                    className="list-group-item list-group-item-action"
                >
                    <FontAwesomeIcon icon={faListUl} className='fas fa-plus fa-fw mr-2 text-gray-400' />Categories
                </NavLink>
                <NavLink
                    exact
                    to={`${productsBaseURL}/categories/add`}
                    activeClassName='active'
                    className="list-group-item list-group-item-action"
                >
                    <FontAwesomeIcon icon={faPlus} className='fas fa-plus fa-fw mr-2 text-gray-400' />Add Category
                </NavLink>
                <NavLink
                    exact
                    to={`${productsBaseURL}`}
                    activeClassName='active'
                    className="list-group-item list-group-item-action"
                >
                    <FontAwesomeIcon icon={faShoppingBag} className='fas fa-plus fa-fw mr-2 text-gray-400' />Products
                </NavLink>
                <NavLink
                    exact
                    to={`${productsBaseURL}/add-product`}
                    activeClassName='active'
                    className="list-group-item list-group-item-action"
                >
                    <FontAwesomeIcon icon={faPlus} className='fas fa-plus fa-fw mr-2 text-gray-400' />Add Product
                </NavLink>
            </div>
        </div>
    </div>
)

export default Products;