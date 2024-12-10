import { axiosInstance } from '@/api/axiosInstance';
import { AxiosResponse } from 'axios';
import {
  ChangeUserConfigRequest,
  GetUserTrainingConfigResponse,
} from '@/types/trainingApiType';

export const getConfigs = async () => {
  const response: AxiosResponse<GetUserTrainingConfigResponse> =
    await axiosInstance.get('/trainings/configs');
  return response.data;
};

export const changeConfigs = async (params: ChangeUserConfigRequest) => {
  const response: AxiosResponse<GetUserTrainingConfigResponse> =
    await axiosInstance.put('/trainings/configs', params);
  return response.data;
};
