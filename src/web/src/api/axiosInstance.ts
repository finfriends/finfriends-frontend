import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { refresh } from '@/api/authApi';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAccessToken = (token: string) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAccessToken = () => {
  axiosInstance.defaults.headers.common.Authorization = null;
};

export const getAccessToken = () => {
  return axiosInstance.defaults.headers.common.Authorization;
};

axiosInstance.interceptors.request.use(
  async (cfg) => {
    const config = { ...cfg };
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터: 401 에러 처리
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response, // 정상적인 응답은 그대로 반환
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (originalRequest && error.response?.status === 401) {
      try {
        const res = await refresh();
        setAccessToken(res.accessToken);

        originalRequest.headers.Authorization = `Bearer ${res.accessToken}`;
        return await axiosInstance(originalRequest);
      } catch (err) {
        clearAccessToken();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
