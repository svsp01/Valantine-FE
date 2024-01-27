import axios from 'axios';
const BASE_URL = "https://shy-tan-catfish-tutu.cyclic.app" ;

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
