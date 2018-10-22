import axios from 'axios';

export const DATA_BASE_URL = 'http://www.clashapi.xyz/api/';
export const IMAGES_BASE_URL = 'http://www.clashapi.xyz/images/';

const dataAPI = axios.create({
    baseURL: DATA_BASE_URL
});

dataAPI.interceptors.request.use(config => {
    // config.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    // config.headers.post['Access-Control-Allow-Origin'] = '*';
    // config.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    // config.headers.post['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization';
    // config.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM4MzdjNjk4LTU1ZGItNGYxZS1iN2M5LWZkYWJmN2JlYzEzZCIsImlhdCI6MTU0MDI0NTc3MCwic3ViIjoiZGV2ZWxvcGVyLzg3ZjY0MjQ3LTUwM2UtMWE0Yi1jZWQyLWFjODk1MTNjNWUzMyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1NC4xNTIuMTExLjIzOCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.90-nFC9xlM-Dv56_2Aipw0cbsQXGgdzUgX8eL06tNtuZSkAAHpqxVRAgwxyEU-XhrDdS30_X6SQksgtTZ-AJAA'
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
