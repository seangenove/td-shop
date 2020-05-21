import React from 'react';

import ProductList from './ProductList';

const Shop = () => {
    return (
        <div>
            <section
                className="bg-title-page p-t-50 p-b-40 flex-col-c-m"
                style={{ backgroundImage: `url('https://cdn.shopify.com/s/files/1/2672/5778/t/6/assets/collection_top.jpg?v=8714313585269873512')`, minHeight: '150px' }}
            >
                <h2 className="l-text2 t-center">PRODUCTS</h2>
            </section>

            <section className="bgwhite p-t-25 p-b-65">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
                            <div className="leftbar p-r-20 p-r-0-sm">

                                <Categories />
                                <Filters />

                            </div>
                        </div>

                        <ProductList />
                        
                    </div>
                </div>
            </section>
        </div>
    )
};

const Categories = () => (
    <div>
        <h4 className="m-text14 p-b-7">Categories</h4>
        <ul className="p-b-30">
            <li className="p-t-4">
                <a href="#" className="s-text13 active1">All</a>
            </li>
            <li className="p-t-4">
                <a href="#" className="s-text13">Shirts</a>
            </li>
            <li className="p-t-4">
                <a href="#" className="s-text13">Hoodies</a>
            </li>
            <li className="p-t-4">
                <a href="#" className="s-text13">Overalls</a>
            </li>
            <li className="p-t-4">
                <a href="#" className="s-text13">Velvet Suits</a>
            </li>
        </ul>
    </div>
);

const Filters = () => (
    <div>
        <h4 class="m-text14 p-b-32">Filters</h4>
        <div class="filter-color p-t-22 p-b-50 bo3">
            <div class="m-text15 p-b-12">Color</div>
            <ul class="flex-w">
                <li class="m-r-10">
                    <input class="checkbox-color-filter" id="color-filter1" type="checkbox" name="color-filter1" />
                    <label class="color-filter color-filter1" for="color-filter1"></label>
                </li>
                <li class="m-r-10">
                    <input class="checkbox-color-filter" id="color-filter2" type="checkbox" name="color-filter2" />
                    <label class="color-filter color-filter2" for="color-filter2"></label>
                </li>
                <li class="m-r-10">
                    <input class="checkbox-color-filter" id="color-filter3" type="checkbox" name="color-filter3" />
                    <label class="color-filter color-filter3" for="color-filter3"></label>
                </li>
                <li class="m-r-10">
                    <input class="checkbox-color-filter" id="color-filter4" type="checkbox" name="color-filter4" />
                    <label class="color-filter color-filter4" for="color-filter4"></label>
                </li>
                <li class="m-r-10">
                    <input class="checkbox-color-filter" id="color-filter5" type="checkbox" name="color-filter5" />
                    <label class="color-filter color-filter5" for="color-filter5"></label>
                </li>
                <li class="m-r-10">
                    <input class="checkbox-color-filter" id="color-filter6" type="checkbox" name="color-filter6" />
                    <label class="color-filter color-filter6" for="color-filter6"></label>
                </li>
                <li class="m-r-10">
                    <input class="checkbox-color-filter" id="color-filter7" type="checkbox" name="color-filter7" />
                    <label class="color-filter color-filter7" for="color-filter7"></label>
                </li>
            </ul>
        </div>
    </div>
);

export default Shop;