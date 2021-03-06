import axios from 'axios';
import { config } from 'vue/types/umd';

axios.defaults.baseURL = process.env.BASE_API;
axios.defaults.timeout = 2 * 60 * 1000;
axios.defaults.withCredentials = false;

axios.interceptors.request.use(
  config => {},
  err => {
    return Promise.reject(err);
  },
);

axios.interceptors.response.use(
  config => {},
  err => {
    return Promise.reject(err);
  },
);
export default axios;
