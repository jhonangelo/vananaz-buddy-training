import React, { useContext, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoListTemplate } from '../../templates/TodoListTemplate';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';
import { DeleteModal } from '../../molecule/DeleteModal';
import { showToast } from '../../atoms/ToastNotification/Component';
import { ToastNotification } from '../../atoms/ToastNotification';

type Props = {};

const Component = (props: Props) => {
  const { todos, deleteTodo } = useContext<TodoContextType>(TodoContext);
  const [isOpen, setIsOpen] = useState(false);
  const [currentID, setCurrentID] = useState(0);

  const navigate = useNavigate();
  const AddTodoBtnClick = useCallback(
    () => navigate('/', { replace: true }),
    [navigate]
  );

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = (id: number) => {
    setCurrentID(id);
    setIsOpen(true);
  };

  const handleConfirmDelete = () => {
    closeModal();
    deleteTodo(currentID);
    setCurrentID(0);
    showToast('To do deleted');
  };

  return (
    <>
      <TodoListTemplate
        data={todos}
        homeBtnClick={() => console.log('logout')}
        SearchInputClick={() => console.log('search-todo')}
        itemClick={() => console.log('todo-item-clicked')}
        AddTodoBtnClick={() => navigate('/add')}
        handleDelete={handleDelete}
        handleUpdate={() => console.log('handle-update')}
        SearchBtnClick={() => navigate('/select')}
        linkTo='/add'
      />
      <ToastNotification duration={1500} position='bottom-center' />
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        noBtnClick={closeModal}
        yesBtnClick={handleConfirmDelete}
      />
    </>
  );
};

export default Component;
