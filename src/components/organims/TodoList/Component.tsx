import React from 'react';
import styled from 'styled-components';
import { TodoListItem } from '../../molecule/TodoListItem';

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

export type Props = {
  data: Todo[];
  itemClick: () => void;
  handleUpdate: () => void;
  handleDelete: () => void;
};

const Component = ({ data, itemClick, handleUpdate, handleDelete }: Props) => {
  return (
    <ListContainer>
      {data &&
        data.map((item) => (
          <TodoListItem
            key={item.id}
            isDone={item.isDone}
            text={item.text}
            itemClick={itemClick}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
    </ListContainer>
  );
};

export default Component;
