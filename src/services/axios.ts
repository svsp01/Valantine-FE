import axios from 'axios';
const BASE_URL = "http://192.168.218.78:5000" ;

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
