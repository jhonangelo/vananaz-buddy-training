import React, { useContext } from 'react';
import { UpdateTodoTemplate } from '../../templates/UpdateTodoTemplate';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';
import { useNavigate } from 'react-router-dom';
import { showToastSuccess } from '../../atoms/ToastNotification/Component';

type Props = {};

const Component = (props: Props) => {
  const { updateTodo, currentTodo } = useContext<TodoContextType>(TodoContext);

  const navigate = useNavigate();

  const handleUpdateTodo = (updatedText: string) => {
    updateTodo(updatedText);
    navigate('/');
    showToastSuccess('To do updated');
  };

  return (
    <UpdateTodoTemplate
      currentValue={currentTodo}
      updateSubmit={handleUpdateTodo}
    />
  );
};

export default Component;
