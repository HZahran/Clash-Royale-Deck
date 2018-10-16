import axios from 'axios';

export const DATA_BASE_URL = 'http://www.clashapi.xyz/api/';
export const IMAGES_BASE_URL = 'http://www.clashapi.xyz/images/';

const dataAPI = axios.create({
    baseURL: DATA_BASE_URL
});

export default {
    getCards() {
        return dataAPI.get('cards')
    },
    getCardDetails(id) {
        return dataAPI.get(`cards/${id}`)
    },
    getImageURL(idName) {
        return `${IMAGES_BASE_URL}/cards/${idName}.png`
    }
}