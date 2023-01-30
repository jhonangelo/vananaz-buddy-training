import { styled } from '@storybook/theming';
import React, { useState } from 'react';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export type Props = {
  submitLogin: (user: User) => void;
};

type User = { username: string; password: string };

const Component = ({ submitLogin }: Props) => {
  const [formData, setFormData] = useState<User>({
    username: '',
    password: '',
  });

  const resetFormData = () => {
    setFormData({ username: '', password: '' });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitLogin(formData);
    resetFormData();
  };
  return (
    <Container onSubmit={(event) => handleSubmit(event)}>
      <Input
        label='Username'
        type='text'
        value={formData.username}
        onChange={(event) => {
          setFormData({ ...formData, username: event.target.value });
        }}
      />
      <Input
        label='Password'
        type='password'
        value={formData.password}
        onChange={(event) => {
          setFormData({ ...formData, password: event.target.value });
        }}
      />
      <Button type='submit' buttonType='primary' label='Login' />
    </Container>
  );
};

export default Component;
