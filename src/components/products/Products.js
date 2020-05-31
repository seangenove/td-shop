import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faListUl } from '@fortawesome/free-solid-svg-icons';

import ProductCategoryForm from './product-categories/ProductCategoryForm';
import ProductCategoriesList from './product-categories/ProductCategoriesList';

const Products = ({ match }) => {

    const baseURL = match.path

    return (
        <section className="bg-light pt-5">
            <div className="container">
                <div className="row">
                    <SidePanel baseURL={baseURL}/>

                    <div className="col-lg-8 col-xl-9">
                        <Route exact path={`${baseURL}/add-category`} component={ProductCategoryForm} />
                        <Route exact path={`${baseURL}/edit-category/:id`} component={ProductCategoryForm} />
                        <Route exact path={baseURL} component={ProductCategoriesList} />
                    </div>
                </div>
            </div>
        </section>
    )
}

const SidePanel = ({ baseURL }) => (
    <div className="col-lg-4 col-xl-3 mb-5">
        <div className="card nav-sticky">
            <div className="list-group list-group-flush small">
                <NavLink
                    exact
                    to={`${baseURL}/add-category`}
                    activeClassName='active'
                    className="list-group-item list-group-item-action"
                >
                    <FontAwesomeIcon icon={faPlus} className='fas fa-plus fa-fw mr-2 text-gray-400' />Add Category
                </NavLink>
                <NavLink
                    exact
                    to={`${baseURL}`}
                    activeClassName='active'
                    className="list-group-item list-group-item-action"
                >
                    <FontAwesomeIcon icon={faListUl} className='fas fa-plus fa-fw mr-2 text-gray-400' />View Categories
                </NavLink>
            </div>
        </div>
    </div>
)

export default Products;