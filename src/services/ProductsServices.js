import Endpoints from "../config/Endpoints";
import { AppApiRequest } from "./index";

export const fetchProducts = (onSuccess, onFailure) => {
    AppApiRequest(Endpoints.PRODUCTS, 'GET', onSuccess, onFailure);
};

export const fetchProductById = (id, onSuccess, onFailure) => {
    AppApiRequest(`${Endpoints.PRODUCTS}/${id}`, 'GET', onSuccess, onFailure);
};

export const upsertProduct = (data, onSuccess, onFailure) => {
    AppApiRequest(Endpoints.UPSERT_PRODUCT, 'POST', onSuccess, onFailure, data);
};

export const deleteProductCategory = (id, onSuccess, onFailure) => {
    AppApiRequest(`${Endpoints.DELETE_PRODUCT}/${id}`, 'POST', onSuccess, onFailure);
};


