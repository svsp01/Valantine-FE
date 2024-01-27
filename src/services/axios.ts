import axios from 'axios';
const BASE_URL = "http://127.0.0.1:5000" ;

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
