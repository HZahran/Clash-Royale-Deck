import axios from 'axios';

export const DATA_BASE_URL = 'http://www.clashapi.xyz/api/';
export const IMAGES_BASE_URL = 'http://www.clashapi.xyz/images/';

const dataAPI = axios.create({
    baseURL: DATA_BASE_URL
});

dataAPI.interceptors.request.use(config => {
    config.headers['Access-Control-Allow-Origin'] = '*'
    return config;
});

/**
 * Intercepts all ongoing responses to get the required data or error message directly
 */

dataAPI.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error.response.data)
    }
)

export default {
    getCards() {
        return dataAPI.get('cards')
    },
    getCardDetails(idName) {
        return dataAPI.get(`cards/${idName}`)
    },
    getImageURL(idName) {
        return `${IMAGES_BASE_URL}/cards/${idName}.png`
    }
}
