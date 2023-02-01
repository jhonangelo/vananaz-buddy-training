import React, { useContext } from 'react';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';
import { SelectListTemplate } from '../../templates/SelectListTemplate';

type Props = {};

const Component = (props: Props) => {
  const { todos, deleteSelected, completeSelected } =
    useContext<TodoContextType>(TodoContext);

  const handleCompleteSelected = (checkedItems: number[]) => {
    completeSelected(checkedItems);
  };

  const handleDeleteSelected = (checkedItems: number[]) => {
    deleteSelected(checkedItems);
  };

  return (
    <SelectListTemplate
      data={todos}
      completeSelected={handleCompleteSelected}
      deleteSelected={handleDeleteSelected}
    />
  );
};

export default Component;
