import React, { useState } from 'react';
import styled from 'styled-components';
import { Todo } from '../../../hooks/todos/hooks';
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
  currentTodo: Todo;
};

const Component = ({ updateSubmit, currentTodo }: Props) => {
  const [input, setInput] = useState<string>(currentTodo.todo);

  const handleUpdate = (
    event: React.FormEvent<HTMLFormElement>,
    input: string
  ) => {
    event.preventDefault();
    updateSubmit(input);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const clearInput = () => {
    setInput('');
  };
  return (
    <Container>
      <BackButton label='Update to do' />
      <UpdateForm onSubmit={(event) => handleUpdate(event, input)}>
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
