import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../../hooks/todos/hooks';
import { TodoListItem } from '../../molecule/TodoListItem';

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export type Props = {
  data?: Todo[];
  itemClick: (id: number) => void;
  handleUpdate: (todo: Todo) => void;
  handleDelete: (todo: Todo) => void;
  isOpen: boolean;
};

const Component = ({
  data,
  itemClick,
  handleUpdate,
  handleDelete,
  isOpen,
}: Props) => {
  const sortedTodoData = data?.sort(
    (x, y) => Number(x.completed) - Number(y.completed)
  );
  return (
    <ListContainer>
      {sortedTodoData?.map((item) =>
        item.completed ? (
          <TodoListItem
            key={item.id}
            isDone={item.completed}
            text={item.todo}
            handleUpdate={() => console.log(item)}
            handleDelete={() => handleDelete(item)}
            isOpen={isOpen}
          />
        ) : (
          <TodoListItem
            key={item.id}
            isDone={item.completed}
            text={item.todo}
            itemClick={() => itemClick(item.id)}
            handleUpdate={() => handleUpdate(item)}
            handleDelete={() => handleDelete(item)}
            isOpen={isOpen}
          />
        )
      )}
    </ListContainer>
  );
};

export default Component;
