import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoListTemplate } from '../../templates/TodoListTemplate';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';

type Props = {};

const Component = (props: Props) => {
  const { todos, deleteTodo } = useContext<TodoContextType>(TodoContext);

  const navigate = useNavigate();
  return (
    <TodoListTemplate
      data={todos}
      homeBtnClick={() => console.log('logout')}
      SearchInputClick={() => alert('w')}
      itemClick={() => console.log('todo-item-clicked')}
      AddTodoBtnClick={() => navigate('/add')}
      handleDelete={deleteTodo}
      handleUpdate={() => console.log('handle-update')}
      SearchBtnClick={() => navigate('/select')}
      linkTo='/add'
    />
  );
};

export default Component;
