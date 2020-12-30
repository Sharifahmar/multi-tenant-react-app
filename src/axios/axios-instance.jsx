import axios from "axios";
import { history } from "../history"

// Set config defaults when creating the instance
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/'
});

axiosInstance.interceptors.request.use(request => {
    const token = sessionStorage.getItem('token');
    if (token) {
        request.headers.Authorization = 'Bearer ' + token;
    } else {
        request.headers.Authorization = 'Tenant ' + request.data.tenantName;
    }
    return request;
}, error => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        history.push("/");
    }
    return Promise.reject(error);
});