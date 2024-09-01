import { AuthProvider, UserRole } from '@/constants/auth';

export type AuthInfo = {
  id: number;
  userId: number;
  authType: AuthProvider;
  authenticatedAt: string;
};

export type CreateUserResponseType = {
  id: number;
  email: string;
  nickname: string;
  name: string;
  profileImage: string;
  isActive: boolean;
  role: UserRole;
  authInfo: AuthInfo;
  createdAt: string;
  updatedAt: string;
  accessToken: string;
};

export type CreateUserRequestType = {
  code: string;
  authProvider: AuthProvider;
};
