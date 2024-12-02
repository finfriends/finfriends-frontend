import { AxiosResponse } from 'axios';
import { axiosInstance } from '@/api/axiosInstance';
import { UserInfoResponseType } from '@/types/authApi';

export const getMe = async () => {
  const response: AxiosResponse<UserInfoResponseType> =
    await axiosInstance.get('/users/me');
  return response.data;
};
