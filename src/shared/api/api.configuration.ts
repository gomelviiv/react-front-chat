import axios from 'axios';

import useIsLoggedIn from './hooks/useIsLogin';

const $api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  useIsLoggedIn();
  return config;
});

export default $api;
