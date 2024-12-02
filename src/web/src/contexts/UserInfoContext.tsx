import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import { UserInfoResponseType } from '@/types/authApi';

interface UserInfoContextType {
  userConfig: UserInfoResponseType | null;
  setUserConfig: (config: UserInfoResponseType | null) => void;
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userConfig, setUserConfig] = useState<UserInfoResponseType | null>(
    null
  );

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
