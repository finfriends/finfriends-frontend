import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { CreateUserRequestType } from '@/types/authApi';

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

const authInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const refresh = async (): Promise<{ accessToken: string }> => {
  const response = await authInstance.post('/auth/token/refresh');
  return response.data;
};

export const Login = async (params: CreateUserRequestType) => {
  const response = await authInstance.post('/auth/oauth/token', params);
  setAccessToken(response.data.accessToken);
  return response.data;
};
