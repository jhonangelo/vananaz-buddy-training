import React, { useContext, useEffect, useState } from 'react';
import { UpdateTodoTemplate } from '../../templates/UpdateTodoTemplate';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../../atoms/ToastNotification/Component';

type Props = {};

const Component = (props: Props) => {
  const { currentId, todos, updateTodo } =
    useContext<TodoContextType>(TodoContext);
  const [itemText, setItemText] = useState<string>('');

  const navigate = useNavigate();

  const handleUpdateTodo = (updatedText: string) => {
    updateTodo(updatedText);
    navigate('/');
    showToast('To do updated');
  };

  useEffect(() => {
    if (currentId && todos) {
      const item = todos.find((item) => item.id === currentId);
      setItemText(item?.text ?? '');
    }
  }, [currentId, todos]);

  return (
    <UpdateTodoTemplate
      currentValue={itemText}
      updateSubmit={handleUpdateTodo}
    />
  );
};

export default Component;
