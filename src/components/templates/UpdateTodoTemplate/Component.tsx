import React, { useState } from 'react';
import styled from 'styled-components';
import { BackButton } from '../../atoms/BackButton';
import { Input } from '../../atoms/Input';
import { ToastNotification } from '../../atoms/ToastNotification';
import { showToast } from '../../atoms/ToastNotification/Component';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
  row-gap: 20px;
`;

export type Props = {
  updateSubmit: (input: string) => void;
  currentValue: string;
};

const Component = ({ updateSubmit, currentValue }: Props) => {
  const [toUpdateValue, setUpdatedValue] = useState(currentValue);

  const handleUpdateSubmit = (input: string) => {
    updateSubmit(input);
    showToast('To do updated');
  };
  return (
    <Container>
      <BackButton label='Update to do' />
      <Input
        formSubmit={handleUpdateSubmit}
        currentValue={toUpdateValue}
        hasClearButton
        setUpdatedValue={setUpdatedValue}
      />
      <ToastNotification position='bottom-center' />
    </Container>
  );
};

export default Component;
