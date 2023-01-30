import React, { useState } from 'react';
import styled from 'styled-components';
import { BackButton } from '../../atoms/BackButton';
import { Input } from '../../atoms/Input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
  row-gap: 20px;
`;

const UpdateForm = styled.form``;

export type Props = {
  updateSubmit: (input: string) => void;
  currentValue: string;
};

const Component = ({ updateSubmit, currentValue }: Props) => {
  const [input, setInput] = useState<string>(currentValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const clearInput = () => {
    setInput('');
  };
  return (
    <Container>
      <BackButton label='Update to do' />
      <UpdateForm onSubmit={() => updateSubmit(input)}>
        <Input
          type='text'
          value={input}
          hasClearButton
          onChange={handleChange}
          clearInput={clearInput}
        />
      </UpdateForm>
    </Container>
  );
};

export default Component;
