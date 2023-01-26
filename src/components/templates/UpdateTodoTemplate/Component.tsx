import React, { useState } from 'react';
import styled from 'styled-components';
import { BackButton } from '../../atoms/BackButton';
import { Input } from '../../atoms/Input';
import { ToastNotification } from '../../atoms/ToastNotification';

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
  return (
    <Container>
      <BackButton label='Update to do' />
      <Input
        formSubmit={updateSubmit}
        currentValue={toUpdateValue}
        hasClearButton
        setUpdatedValue={setUpdatedValue}
      />
      <ToastNotification position='bottom-center' />
    </Container>
  );
};

export default Component;
