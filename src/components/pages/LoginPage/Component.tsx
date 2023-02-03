import React, { useContext } from 'react';
import { LoginTemplate } from '../../templates/LoginTemplate';
import { UserContextType, UserContext, User } from '../../../hooks/users/hooks';
import { toast } from 'react-hot-toast';

export type Props = {};

const Component = (props: Props) => {
  const { loginUser } = useContext<UserContextType>(UserContext);

  const handleLogin = (user: User) => {
    if (!user.username.length || !user.password.length) {
      toast.error('Username/Password is required');
    } else {
      loginUser(user);
    }
  };

  return <LoginTemplate submitLogin={handleLogin} />;
};

export default Component;
