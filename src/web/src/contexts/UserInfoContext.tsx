import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import { UserInfoResponseType } from '@/types/authApi';

interface UserInfoContextType {
  userInfo: UserInfoResponseType | null;
  setUserInfo: (config: UserInfoResponseType | null) => void;
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfoResponseType | null>(null);

  const value = useMemo(() => ({ userInfo, setUserInfo }), [userInfo]);

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
