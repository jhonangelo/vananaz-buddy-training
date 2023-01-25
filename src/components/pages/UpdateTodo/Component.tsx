import React, { useContext, useEffect, useState } from 'react';
import { UpdateTodoTemplate } from '../../templates/UpdateTodoTemplate';
import { TodoContextType, TodoContext } from '../../../hooks/todos/hooks';

type Props = {};

const Component = (props: Props) => {
  const { currentId, todos } = useContext<TodoContextType>(TodoContext);
  const [itemText, setItemText] = useState<string>('');

  useEffect(() => {
    if (currentId && todos) {
      const item = todos.find((item) => item.id === currentId);
      setItemText(item?.text ?? '');
    }
  }, [currentId, todos]);

  return (
    <UpdateTodoTemplate
      currentValue={itemText}
      updateSubmit={() => console.log('s')}
    />
  );
};

export default Component;
