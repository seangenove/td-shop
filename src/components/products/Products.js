import React from 'react';
import { Link, Route } from 'react-router-dom';

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
                        <Route exact path={`${match.path}/add-category`} component={ProductCategoryForm} />
                        <Route exact path={match.path} component={ProductCategoriesList} />
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
                <Link
                    to={`${baseURL}/add-category`}
                    className="list-group-item list-group-item-action"
                >
                    <FontAwesomeIcon icon={faPlus} className='fas fa-plus fa-fw mr-2 text-gray-400' />Add Category
                </Link>
                <Link
                    to={`${baseURL}`}
                    className="list-group-item list-group-item-action"
                >
                    <FontAwesomeIcon icon={faListUl} className='fas fa-plus fa-fw mr-2 text-gray-400' />View Categories
                </Link>
            </div>
        </div>
    </div>
)

export default Products;