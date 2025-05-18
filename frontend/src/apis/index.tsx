import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/api/' : 'http://c.cblink.rw/api/';


const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('connect_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('connect_token');
      localStorage.removeItem('connect_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;