import React, { useContext } from 'react';
import { UpdateTodoTemplate } from '../../templates/UpdateTodoTemplate';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';

type Props = {};

const Component = (props: Props) => {
  const { updateTodo, currentTodo } = useContext<TodoContextType>(TodoContext);

  const handleUpdateTodo = (text: string) => {
    updateTodo(text);
  };

  return (
    <UpdateTodoTemplate
      currentTodo={currentTodo}
      updateSubmit={handleUpdateTodo}
    />
  );
};

export default Component;
