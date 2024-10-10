import { axiosInstance } from '@/api/axiosInstance';
import { AxiosResponse } from 'axios';
import {
  GetHighestStaticRecordResponse,
  GetStaticRecordsRequest,
  GetStaticRecordsResponse,
} from '@/types/trainingApiType';

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

export const getStaticRecords = async (req: GetStaticRecordsRequest) => {
  let queryString = `/trainings/static-records?userId=${req.userId}`;

  if (req.cursor !== undefined) {
    queryString += `&cursor=${req.cursor}`;
  }

  if (req.limit !== undefined) {
    queryString += `&limit=${req.limit}`;
  }

  const response: AxiosResponse<GetStaticRecordsResponse> =
    await axiosInstance.get(queryString);

  return response.data;
};

export const deleteStaticRecord = async (recordId: number) => {
  const response = await axiosInstance.delete(
    `/trainings/static-records/${recordId}`
  );
  return response.data;
};
