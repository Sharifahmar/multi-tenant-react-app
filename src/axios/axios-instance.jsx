import axios from "axios";

// Set config defaults when creating the instance
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/'
});

axiosInstance.interceptors.request.use(request => {
    const token = sessionStorage.getItem('token');
    if (token) {
        axiosInstance.defaults.headers.common[ 'Authorization' ] = token;
    } else {
        axiosInstance.defaults.headers.common[ 'Authorization' ] = 'Tenant ' + request.data.tenantName;
    }
    return request;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});