import React, { useState, useEffect } from 'react';

import ProductsList from './ProductsList';

import Ingredients from './../ingredients/index';

import { fetchProducts } from './../../services/ProductsServices'

const Products = () => {

    return (
        <div>
            <ProductsList />
        </div>
    )

}

export default Products;