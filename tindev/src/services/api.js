import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tindev-backend-api.herokuapp.com/',
});

export default api;
