import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoListTemplate } from '../../templates/TodoListTemplate';
import { TodoContextType, TodoContext, Todo } from '../../../hooks/todos/hooks';
import { DeleteModal } from '../../molecule/DeleteModal';
import { UserContext, UserContextType } from '../../../hooks/users/hooks';

type Props = {};

const Component = (props: Props) => {
  const { todos, currentTodo, deleteTodo, completeTodo, setCurrentTodo } =
    useContext<TodoContextType>(TodoContext);
  const { logoutUser } = useContext<UserContextType>(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = (todo: Todo) => {
    setCurrentTodo(todo);
    setIsOpen(true);
  };

  const handleConfirmDelete = () => {
    closeModal();
    deleteTodo(currentTodo);
  };

  const handleUpdate = (todo: Todo) => {
    setCurrentTodo(todo);
    navigate('update');
  };

  return (
    <>
      <TodoListTemplate
        data={todos}
        homeBtnClick={logoutUser}
        SearchInputClick={() => navigate('search')}
        itemClick={completeTodo}
        AddTodoBtnClick={() => navigate('add')}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        SearchBtnClick={() => navigate('select')}
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
