import axios, { AxiosInstance } from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const axiosClient: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}api/`
});
