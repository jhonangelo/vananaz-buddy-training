import React, { createContext, useEffect } from 'react';
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

export type UserContextType = {
  loginUser: (user: User) => void;
  logoutUser: () => void;
};

export const UserContext = createContext<UserContextType>({
  loginUser: (user: User) => {},
  logoutUser: () => {},
});

export const UserContextProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const loginUser = async (user: User) => {
    try {
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        {
          username: user.username,
          password: user.password,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      localStorage.setItem('token', response.data.token);
      navigate('/todos');
      showToastSuccess('Login successful');
    } catch (error: any) {
      console.log(error);
      showToastError(error.response?.data?.message || 'An error occured');
    }
  };
  const logoutUser = () => {
    localStorage.removeItem('token');
    navigate('/');
    showToastSuccess('Logout successful');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const currentPage = window.location.pathname;
    !token && currentPage !== '/' && navigate('/');
    token && currentPage === '/' && navigate('/todos');
  }, [navigate]);

  return (
    <UserContext.Provider value={{ loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
