import React from 'react';
import { LoginTemplate } from '../../templates/LoginTemplate';

export type Props = {};

type User = { username: string; password: string };

const Component = (props: Props) => {
  const handleLogin = (user: User) => {
    return;
  };
  return <LoginTemplate submitLogin={handleLogin} />;
};

export default Component;
