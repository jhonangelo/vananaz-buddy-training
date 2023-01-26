import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 26px;
`;

type Props = {
  submitRegister: () => void;
  onChange: () => void;
};

const Component = ({ submitRegister }: Props) => {
  return (
    <Container onSubmit={submitRegister}>
      <Input label='Name' type='text' onChange={onChange} />
      <Input label='Email' type='email' onChange={onChange} />
      <Input label='Age' type='number' onChange={onChange} />
      <Input label='Password' type='password' onChange={onChange} />
      <Button type='submit' label='Register' buttonType='primary' />
    </Container>
  );
};

export default Component;
