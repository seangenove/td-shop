import axios from 'axios';
import _ from 'lodash';
import setAuthToken from '../utilities/setAuthToken';

/**
 *  Generic App API Request
 * @param {string} endpoint
 * @param {string } method
 * @param {function} onSuccess
 * @param {function} onError
 * @param {{}} data
 * @constructor
 */
export const AppApiRequest = async (endpoint, method, onSuccess, onError, data = {}) => {

    if (method.toUpperCase() === 'GET' && !_.isEmpty(data)) {
        // Convert data to query params
        // { a: b, c: d}  -----> /endpoint?a=b&c=d

        const queryParams = _.map(data, (value, key) => {
            return `${key}=${value}`;
        });

        if (queryParams.length > 0) {
            const queryStr = queryParams.join('&');
            endpoint = `${endpoint}?${queryStr}`;
            data = {};
        }

    }

    const loggedInUser = JSON.parse(localStorage.getItem('state')).loggedInUser;

    if (loggedInUser.access_token) {
        setAuthToken(loggedInUser.access_token);
    }

    // // For multi-tenancy later on
    axios.defaults.headers.common['x-account-id'] = 1;

    await axios({
        url: endpoint,
        method: method,
        data
    }).then(({ data }) => {

        if (_.isFunction(onSuccess)) {
            onSuccess(data);
        }
    }).catch((error) => {

        if (_.isFunction(onError)) {
            onError(error)
        }
    });
};
