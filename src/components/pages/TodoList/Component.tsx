import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoListTemplate } from '../../templates/TodoListTemplate';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';
import { DeleteModal } from '../../molecule/DeleteModal';
import { showToastSuccess } from '../../atoms/ToastNotification/Component';

type Props = {};

const Component = (props: Props) => {
  const {
    todos,
    deleteTodo,
    completeTodo,
    currentId,
    setCurrentId,
    fetchCurrentText,
  } = useContext<TodoContextType>(TodoContext);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = (id: number) => {
    setCurrentId(id);
    setIsOpen(true);
  };

  const handleConfirmDelete = () => {
    closeModal();
    deleteTodo(currentId);
    setCurrentId(0);
    showToastSuccess('To do deleted');
  };

  const handleUpdate = (id: number) => {
    setCurrentId(id);
    fetchCurrentText(id);
    navigate('update');
  };

  return (
    <>
      <TodoListTemplate
        data={todos}
        homeBtnClick={() => console.log('logout')}
        SearchInputClick={() => navigate('search')}
        itemClick={completeTodo}
        AddTodoBtnClick={() => navigate('/add')}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        SearchBtnClick={() => navigate('select')}
        linkTo='/add'
        isOpen={isOpen}
      />
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
