const Endpoints = {
    REGISTER: '/api/users/register',
    LOGIN: '/api/auth/login',
    
    PRODUCT_CATEGORIES: '/api/product_categories',
    PARENT_PRODUCT_CATEGORIES: '/api/product_categories/parent_categories',
    UPSERT_PRODUCT_CATEGORY: '/api/product_categories/upsert',
    DELETE_PRODUCT_CATEGORY: '/api/product_categories/delete',
    TOGGLE_IS_DISABLED_PRODUCT_CATEGORY: '/api/product_categories/delete',
};

export default Endpoints;
