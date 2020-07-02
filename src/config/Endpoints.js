const Endpoints = {
    REGISTER: '/api/register',
    LOGIN: '/api/login',
    GET_USER_DETAILS: '/api/me',

    PRODUCT_CATEGORIES: '/api/product_categories',
    PARENT_PRODUCT_CATEGORIES: '/api/product_categories/parent_categories',
    UPSERT_PRODUCT_CATEGORY: '/api/product_categories/upsert',
    TOGGLE_IS_FEATURED_PRODUCT_CATEGORY: '/api/product_categories/toggle_is_featured',
    DELETE_PRODUCT_CATEGORY: '/api/product_categories/delete',
};

export default Endpoints;
