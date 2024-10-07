import { axiosInstance } from '@/api/axiosInstance';
import { AxiosResponse } from 'axios';
import { GetHighestStaticRecordResponse } from '@/types/trainingApiType';

export const getHighestStaticRecord = async ({
  userId,
}: {
  userId: number;
}) => {
  const response: AxiosResponse<GetHighestStaticRecordResponse> =
    await axiosInstance.get(
      `/trainings/static-records/highest?userId=${userId}`
    );
  return response.data;
};
