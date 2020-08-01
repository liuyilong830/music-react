import axios from 'axios'

const BASE_URL = 'http://localhost:5000';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log('api/index.js request =>', error.message);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    console.log('api/index.js response =>', error.message);
  }
);

const ajax = (url = '', data = {}, method = 'get') => {
  method = method.toUpperCase();
  return new Promise((resolve, reject) => {
    if (method === 'GET') {
      instance({
        url,
        params: data
      }).then(res => resolve(res), err => reject(err))
    } else if (method === 'POST') {
      instance({
        url,
        params: data,
        method
      }).then(res => resolve(res), err => reject(err))
    }
  })
}

export default ajax
