import React, { useContext } from 'react';
import { AddTodoTemplate } from '../../templates/AddTodoTemplate';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';

export type Props = {};

const Component = (props: Props) => {
  const handleFormSubmit = (
    input: string,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (input.length !== 0) {
      addTodo(input);
    }
  };
  const { addTodo } = useContext<TodoContextType>(TodoContext);
  return <AddTodoTemplate formSubmit={handleFormSubmit} />;
};

export default Component;
