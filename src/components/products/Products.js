import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faListUl, faArchive, faStar, faHandshake } from '@fortawesome/free-solid-svg-icons';

import ProductCategoryForm from './product-categories/ProductCategoryForm';
import ProductCategoriesList from './product-categories/ProductCategoriesList';

const Products = () => {

    const Pages = {
        ADD_PRODUCT_CATEGORY: 'ADD_PRODUCT_CATEGORY',
        PRODUCT_CATEGORIES_LIST: 'PRODUCT_CATEGORIES_LIST'
    }

    const [currentComponent, setCurrentComponent] = useState(Pages.PRODUCT_CATEGORIES_LIST);

    return (
        <section className="bg-light pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-xl-3 mb-5">
                        <div className="card nav-sticky">
                            <div className="list-group list-group-flush small">
                                <a
                                    href="#!"
                                    className="list-group-item list-group-item-action"
                                    onClick={() => setCurrentComponent(Pages.ADD_PRODUCT_CATEGORY)}
                                >
                                    <FontAwesomeIcon icon={faPlus} className='fas fa-plus fa-fw mr-2 text-gray-400' />Add Category
                                </a>
                                <a
                                    href="#!"
                                    className="list-group-item list-group-item-action"
                                    onClick={() => setCurrentComponent(Pages.PRODUCT_CATEGORIES_LIST)}
                                >
                                    <FontAwesomeIcon icon={faListUl} className='fas fa-plus fa-fw mr-2 text-gray-400' />View Categories
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-xl-9">
                        {currentComponent === Pages.ADD_PRODUCT_CATEGORY && <ProductCategoryForm />}
                        {currentComponent === Pages.PRODUCT_CATEGORIES_LIST && (<ProductCategoriesList />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;