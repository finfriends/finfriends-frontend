import { axiosInstance } from '@/api/axiosInstance';

export const getConfigs = async () => {
  const response = await axiosInstance.get('/trainings/configs');
  return response.data;
};
