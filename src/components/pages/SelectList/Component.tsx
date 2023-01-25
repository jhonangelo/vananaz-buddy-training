import React, { useContext } from 'react';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';
import { SelectListTemplate } from '../../templates/SelectListTemplate';

type Props = {};

const Component = (props: Props) => {
  const { todos, deleteSelected, completeSelected } =
    useContext<TodoContextType>(TodoContext);

  return (
    <SelectListTemplate
      data={todos}
      completeSelected={completeSelected}
      deleteSelected={deleteSelected}
    />
  );
};

export default Component;
