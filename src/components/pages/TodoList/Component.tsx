import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoListTemplate } from '../../templates/TodoListTemplate';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';
import { DeleteModal } from '../../molecule/DeleteModal';
import { showToast } from '../../atoms/ToastNotification/Component';
import { ToastNotification } from '../../atoms/ToastNotification';

type Props = {};

const Component = (props: Props) => {
  const { todos, deleteTodo, currentId, setCurrentId } =
    useContext<TodoContextType>(TodoContext);
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
    showToast('To do deleted');
  };

  const handleUpdate = (id: number) => {
    setCurrentId(id);
    navigate('update');
  };

  return (
    <>
      <TodoListTemplate
        data={todos}
        homeBtnClick={() => console.log('logout')}
        SearchInputClick={() => console.log('search-todo')}
        itemClick={() => console.log('todo-item-clicked')}
        AddTodoBtnClick={() => navigate('add')}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        SearchBtnClick={() => navigate('select')}
        linkTo='/add'
        isOpen={isOpen}
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
