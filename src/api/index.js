import axios from 'axios';
import { store } from '../store/store.js';
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

export const instance = axios.create({
  baseURL: 'https://startup-summer-2023-proxy.onrender.com',
  withCredentials: true,
  headers: {
    'x-secret-key': SECRET_KEY,
    'X-Api-App-Id': process.env.REACT_APP_AUTH_USER_CLIENT_SECRET,
  },
});

export const getToken = async () => {
  const res = await instance.get('/2.0/oauth2/password/', {
    params: {
      login: process.env.REACT_APP_AUTH_USER_LOGIN,
      password: process.env.REACT_APP_AUTH_USER_PASSWORD,
      client_id: process.env.REACT_APP_AUTH_USER_CLIENT_ID,
      client_secret: process.env.REACT_APP_AUTH_USER_CLIENT_SECRET,
      hr: process.env.REACT_APP_AUTH_USER_HR,
    },
  });

  instance.interceptors.request.use(function (config) {
    const { accessToken } = store.getState().auth;

    config.headers.Authorization = `Bearer ${accessToken}`;
    config.headers['X-Api-App-Id'] =
      process.env.REACT_APP_AUTH_USER_CLIENT_SECRET;

    return config;
  });

  return res.data;
};

export const getVacancies = async (search) => {
  let path = `/2.0/vacancies`;
  if (search) {
    path += search + `&count=3`;
  } else {
    path += `?count=3`;
  }

  const res = await instance.get(path);
  console.log({ res });
  return res.data;
};

export const getVacancy = async (id) => {
  const res = await instance.get(`/2.0/vacancies/${id}`);

  return res.data;
};

export const getCategories = async () => {
  const res = await instance.get(`/2.0/catalogues/`);

  return res.data;
};

export const getFavoriteVacancies = async (search) => {
  let path = `/2.0/favorites`;
  if (search) {
    path += search + `&count=3`;
  } else {
    path += `?count=3`;
  }

  const res = await instance.get(path);
  console.log({ res });
  return res.data;
};
