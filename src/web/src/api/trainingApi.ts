import { axiosInstance } from '@/api/axiosInstance';
import { AxiosResponse } from 'axios';
import {
  GetBreathBasedRecordsResponse,
  GetHighestStaticRecordResponse,
  GetRecordsRequest,
  GetStaticRecordsResponse,
  GetTimeBasedRecordsResponse,
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

export const getStaticRecords = async (req: GetRecordsRequest) => {
  let queryString = `/trainings/static-records?userId=${req.userId}`;

  if (req.cursor) {
    queryString += `&cursor=${req.cursor}`;
  }

  if (req.limit) {
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

export const getBreathBasedRecords = async (req: GetRecordsRequest) => {
  let queryString = `/trainings/breath-based?userId=${req.userId}`;

  if (req.cursor) {
    queryString += `&cursor=${req.cursor}`;
  }

  if (req.limit) {
    queryString += `&limit=${req.limit}`;
  }

  const response: AxiosResponse<GetBreathBasedRecordsResponse> =
    await axiosInstance.get(queryString);

  return response.data;
};

export const deleteBreathBasedRecord = async (recordId: number) => {
  const response = await axiosInstance.delete(
    `/trainings/breath-based/${recordId}`
  );
  return response.data;
};

export const getTimeBasedRecords = async (req: GetRecordsRequest) => {
  let queryString = `/trainings/time-based?userId=${req.userId}`;

  if (req.cursor) {
    queryString += `&cursor=${req.cursor}`;
  }

  if (req.limit) {
    queryString += `&limit=${req.limit}`;
  }

  const response: AxiosResponse<GetTimeBasedRecordsResponse> =
    await axiosInstance.get(queryString);

  return response.data;
};

export const deleteTimeBasedRecord = async (recordId: number) => {
  const response = await axiosInstance.delete(
    `/trainings/time-based/${recordId}`
  );
  return response.data;
};
