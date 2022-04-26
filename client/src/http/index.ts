import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// TODO: create .env file with url to server
const BASE_API_URL = 'http://localhost:5032';

const $host = axios.create({
    baseURL: BASE_API_URL
})

const $autHost = axios.create({
    baseURL: BASE_API_URL
})

const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
    (config.headers ??= {}).authorization = `Bearer ${localStorage.getItem('token')}`;
    // config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

$autHost.interceptors.request.use(authInterceptor);

export { $host, $autHost };