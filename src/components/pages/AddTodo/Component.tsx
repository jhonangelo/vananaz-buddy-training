import React, { useContext } from 'react';
import { AddTodoTemplate } from '../../templates/AddTodoTemplate';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';

export type Props = {};

const Component = (props: Props) => {
  const { addTodo } = useContext<TodoContextType>(TodoContext);
  return <AddTodoTemplate formSubmit={addTodo} />;
};

export default Component;
