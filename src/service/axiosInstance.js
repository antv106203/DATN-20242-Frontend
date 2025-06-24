/* eslint-disable no-unused-vars */
import axios from "axios";
import ApiConfig from "../config/ApiConfig";
import { logout} from "../actions/auth";
import { refreshToken } from "./AccountAPI";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

const axiosInstance = axios.create({
    baseURL: ApiConfig.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'vi',
    },
    withCredentials: true
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
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
    async (error) => {
        const originalRequest = error.config;
        const resData = error.response?.data;
        const status = resData?.status_code;
        if (status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then((token) => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return axiosInstance(originalRequest);
                }).catch((err) => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const response = await refreshToken(); // Gọi API refresh
                const newToken = response.token;

                // cập nhật token mới
                localStorage.setItem('token', newToken);

                processQueue(null, newToken);

                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);
                localStorage.clear();
                // Điều hướng người dùng đến trang đăng nhập
                window.location.href = '/login';
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
