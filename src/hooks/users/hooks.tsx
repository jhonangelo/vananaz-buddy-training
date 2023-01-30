import React, { createContext } from 'react';
import axios from 'axios';
import {
  showToastSuccess,
  showToastError,
} from '../../components/atoms/ToastNotification/Component';
import { useNavigate } from 'react-router';

type Props = {
  children: React.ReactNode;
};

export type User = {
  username: string;
  password: string;
};

export type UserContextType = { loginUser: (user: User) => void };

export const UserContext = createContext<UserContextType>({
  loginUser: (user: User) => {},
});

export const UserContextProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const loginUser = async (user: User) => {
    try {
      const { data } = await axios.post(
        'https://dummyjson.com/auth/login',
        {
          username: user.username,
          password: user.password,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(data);
      navigate('/todos');
      showToastSuccess('Login success');
    } catch (error) {
      console.log(error);
      showToastError('Login failed');
    }
  };
  return (
    <UserContext.Provider value={{ loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
