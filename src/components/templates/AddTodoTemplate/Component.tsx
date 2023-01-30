import React, { useState } from 'react';
import styled from 'styled-components';
import { BackButton } from '../../atoms/BackButton';
import { Input } from '../../atoms/Input';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 16px;
`;

export type Props = {
  formSubmit: (input: string, event: React.FormEvent<HTMLFormElement>) => void;
};

const Component = ({ formSubmit }: Props) => {
  const [input, setInput] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const clearInput = () => {
    setInput('');
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    formSubmit(input, event);
    clearInput();
  };

  return (
    <Container onSubmit={(event) => handleFormSubmit(event)}>
      <BackButton label='Add to do' />
      <Input
        type='text'
        value={input}
        hasClearButton
        onChange={handleChange}
        clearInput={clearInput}
      />
    </Container>
  );
};

export default Component;
