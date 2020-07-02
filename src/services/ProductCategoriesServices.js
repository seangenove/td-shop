import Endpoints from "../config/Endpoints";
import { AppApiRequest } from "./index";

export const fetchProductCategories = (onSuccess, onFailure) => {
    AppApiRequest(Endpoints.PRODUCT_CATEGORIES, 'GET', onSuccess, onFailure);
};

export const fetchParentProductCategories = (onSuccess, onFailure) => {
    AppApiRequest(Endpoints.PARENT_PRODUCT_CATEGORIES, 'GET', onSuccess, onFailure);
};

export const fetchProductCategoryById = (id, onSuccess, onFailure) => {
    AppApiRequest(`${Endpoints.PRODUCT_CATEGORIES}/${id}`, 'GET', onSuccess, onFailure);
};

export const upsertProductCategory = (data, onSuccess, onFailure) => {
    AppApiRequest(Endpoints.UPSERT_PRODUCT_CATEGORY, 'POST', onSuccess, onFailure, data);
};

export const toggleIsFeaturedProductCategory = (id, onSuccess, onFailure) => {
    AppApiRequest(`${Endpoints.TOGGLE_IS_FEATURED_PRODUCT_CATEGORY}/${id}`, 'POST', onSuccess, onFailure);
};

export const deleteProductCategory = (id, onSuccess, onFailure) => {
    AppApiRequest(`${Endpoints.DELETE_PRODUCT_CATEGORY}/${id}`, 'POST', onSuccess, onFailure);
};


