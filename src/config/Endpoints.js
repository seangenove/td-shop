const Endpoints = {
    REGISTER: '/api/users/register',
    LOGIN: '/api/auth/login',

    PRODUCT_CATEGORIES: '/api/product_categories',
    PARENT_PRODUCT_CATEGORIES: '/api/product_categories/parent_categories',
    UPSERT_PRODUCT_CATEGORY: '/api/product_categories/upsert',
    TOGGLE_IS_FEATURED_PRODUCT_CATEGORY: '/api/product_categories/toggle_is_featured',
    TOGGLE_IS_ARCHIVED_PRODUCT_CATEGORY: '/api/product_categories/toggle_is_archived',
    DELETE_PRODUCT_CATEGORY: '/api/product_categories/delete',
};

export default Endpoints;
