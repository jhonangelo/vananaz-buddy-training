import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';
import { showToastSuccess } from '../../atoms/ToastNotification/Component';
import { SelectListTemplate } from '../../templates/SelectListTemplate';

type Props = {};

const Component = (props: Props) => {
  const { todos, deleteSelected, completeSelected } =
    useContext<TodoContextType>(TodoContext);
  const navigate = useNavigate();

  const handleCompleteSelected = (checkedItems: number[]) => {
    completeSelected(checkedItems);
    navigate('/');
    showToastSuccess('To do completed');
  };

  const handleDeleteSelected = (checkedItems: number[]) => {
    deleteSelected(checkedItems);
    navigate('/');
    showToastSuccess('To do deleted');
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
