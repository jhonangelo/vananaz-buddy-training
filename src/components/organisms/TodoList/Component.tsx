import React from 'react';
import styled from 'styled-components';
import { TodoListItem } from '../../molecule/TodoListItem';

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

export type Props = {
  data?: Todo[];
  itemClick: (id: number) => void;
  handleUpdate: () => void;
  handleDelete: (id: number) => void;
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
    (x, y) => Number(x.isDone) - Number(y.isDone)
  );
  return (
    <ListContainer>
      {sortedTodoData?.map((item) =>
        item.isDone ? (
          <TodoListItem
            key={item.id}
            isDone={item.isDone}
            text={item.text}
            handleUpdate={handleUpdate}
            handleDelete={() => handleDelete(item.id)}
            isOpen={isOpen}
          />
        ) : (
          <TodoListItem
            key={item.id}
            isDone={item.isDone}
            text={item.text}
            itemClick={() => itemClick(item.id)}
            handleUpdate={handleUpdate}
            handleDelete={() => handleDelete(item.id)}
            isOpen={isOpen}
          />
        )
      )}
    </ListContainer>
  );
};

export default Component;
