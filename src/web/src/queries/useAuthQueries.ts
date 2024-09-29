import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { CreateUserRequestType, CreateUserResponseType } from '@/types/authApi';
import { Login } from '@/api/authApi';

export const useCreateUserMutation = (
  options?: UseMutationOptions<
    CreateUserResponseType,
    AxiosError,
    CreateUserRequestType,
    unknown
  >
) =>
  useMutation({
    ...options,
    mutationFn: (params: CreateUserRequestType) => Login(params),
  });
