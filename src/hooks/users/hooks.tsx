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
      const { id, token } = await response.data;
      localStorage.setItem('user', JSON.stringify({ id, token }));
      navigate('/todos');
      showToastSuccess('Login successful');
    } catch (error: any) {
      console.error(error);
      showToastError(error.response?.data?.message || 'An error occurred');
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('user');
    navigate('/');
    showToastSuccess('Logout successful');
  };

  useEffect(() => {
    const currentPage = window.location.pathname;
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!Object.keys(user).length && currentPage !== '/') {
      navigate('/');
    }
    if (Object.keys(user).length && currentPage === '/') {
      navigate('/todos');
    }
  }, [navigate]);

  return (
    <UserContext.Provider value={{ loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
