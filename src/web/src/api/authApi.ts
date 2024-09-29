import axios, { AxiosInstance } from 'axios';
import { CreateUserRequestType } from '@/types/authApi';

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
  return response.data;
};
