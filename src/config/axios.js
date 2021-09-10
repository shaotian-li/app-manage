import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_API;
axios.defaults.timeout = 2 * 60 * 1000;
axios.defaults.withCredentials = false;

axios.interceptors.request.use(
  config => {
    console.log(config);
  },
  err => {
    return Promise.reject(err);
  },
);

axios.interceptors.response.use(
  config => {
    console.log(config);
  },
  err => {
    return Promise.reject(err);
  },
);
export default axios;
