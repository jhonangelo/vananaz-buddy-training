import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export type Props = {
  submitRegister: () => void;
};

const Component = ({ submitRegister }: Props) => {
  return (
    <Container onSubmit={submitRegister}>
      <Input label='Name' type='text' />
      <Input label='Email' type='email' />
      <Input label='Age' type='number' />
      <Input label='Password' type='password' />
      <Button type='submit' label='Register' buttonType='primary' />
    </Container>
  );
};

export default Component;
