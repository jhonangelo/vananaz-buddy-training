import React, { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoListTemplate } from '../../templates/TodoListTemplate';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';

type Props = {};

const Component = (props: Props) => {
  const { todos, deleteTodo } = useContext<TodoContextType>(TodoContext);

  const navigate = useNavigate();
  const AddTodoBtnClick = useCallback(
    () => navigate('/', { replace: true }),
    [navigate]
  );

  return (
    <TodoListTemplate
      data={todos}
      homeBtnClick={() => console.log('logout')}
      SearchInputClick={() => alert('w')}
      itemClick={() => console.log('todo-item-clicked')}
      AddTodoBtnClick={AddTodoBtnClick}
      handleDelete={deleteTodo}
      handleUpdate={() => console.log('handle-update')}
      SearchBtnClick={() => console.log('search-button')}
      linkTo='/'
    />
  );
};

export default Component;
