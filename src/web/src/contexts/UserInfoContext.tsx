import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import { GetUserTrainingConfigResponse } from '@/types/trainingApiType';

interface UserInfoContextType {
  userConfig: GetUserTrainingConfigResponse | null;
  setUserConfig: (config: GetUserTrainingConfigResponse | null) => void;
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userConfig, setUserConfig] =
    useState<GetUserTrainingConfigResponse | null>(null);

  const value = useMemo(() => ({ userConfig, setUserConfig }), [userConfig]);

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error(
      'useUserConfig can only be used within the UserConfigProvider.'
    );
  }
  return context;
};
