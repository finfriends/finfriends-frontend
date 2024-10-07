import { axiosInstance } from '@/api/axiosInstance';
import { AxiosResponse } from 'axios';
import { GetUserTrainingConfigResponse } from '@/types/trainingApiType';

export const getConfigs = async () => {
  const response: AxiosResponse<GetUserTrainingConfigResponse> =
    await axiosInstance.get('/trainings/configs');
  return response.data;
};
