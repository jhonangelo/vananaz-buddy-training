import React from 'react';
import styled from 'styled-components';
import { BackButton } from '../../atoms/BackButton';
import { Input } from '../../atoms/Input';
import { ToastNotification } from '../../atoms/ToastNotification';
import { showToast } from '../../atoms/ToastNotification/Component';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 16px;
`;

export type Props = {
  formSubmit: (input: string) => void;
};

const Component = ({ formSubmit }: Props) => {
  const handleFormSubmit = (input: string) => {
    formSubmit(input);
    showToast('To do saved');
  };
  return (
    <Container>
      <BackButton label='Add to do' />
      <Input type='text' hasClearButton formSubmit={handleFormSubmit} />
      <ToastNotification position='bottom-center' />
    </Container>
  );
};

export default Component;
