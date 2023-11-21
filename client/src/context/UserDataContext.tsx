import { createContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { SESSION } from '../constant/UserSession';

type User = {
    userLoginDataId: string,
    firstname: string,
    lastname: string,
    email: string,
    role: string
}

export type UserContextType = {
  user: User | null;
  sigIn: (data: User) => void;
  logOut: () => void;
};

export const UserAuth = createContext<UserContextType>({
  user: null,
  sigIn: (data: User) => {},
  logOut: () => {},
});

interface UserDataContextProps {
  children: ReactNode;
}

  export function UserDataContextProvider({ children }: UserDataContextProps) {
    const [userData, setUserData] = useState<User | null>(null);

    const sigIn = useCallback( (data: User) => {
      setUserData(data);
    },[]);

    const logOut = useCallback(() => {
      setUserData(null);
    }, []);

    useEffect (
      ()=>{
        if(userData){
          const timeout = setTimeout(logOut, SESSION.EXPIRY);
          return () => clearTimeout(timeout);
        }
      }, [userData, logOut]);

    const context = {
      user: userData,
      sigIn: sigIn,
      logOut: logOut,
    };

    return (
      <UserAuth.Provider value={context}>
        {children}
      </UserAuth.Provider>
    );
  }