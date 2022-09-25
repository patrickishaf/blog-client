const axios = require('axios');

//const SERVER_URL = 'https://guarded-beach-92415.herokuapp.com';

const SERVER_URL = 'http://localhost:8000';

export const axiosClient = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default SERVER_URL;