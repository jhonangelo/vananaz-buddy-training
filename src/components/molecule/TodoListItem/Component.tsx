import React, { useState } from 'react';
import { TodoItem } from '../../atoms/TodoItem';
import styled from 'styled-components';
import { KebabMenu } from '../../atoms/KebabMenu';

const Item = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px 6px 8px 6px;
  gap: 20px;
`;

export type Props = {
  text: string;
  isDone: boolean;
  isUpdating?: boolean;
  isToBeDeleted?: boolean;
  itemClick?: () => void;
  handleUpdate: () => void;
  handleDelete: () => void;
};

const Component = ({
  text,
  isDone,
  itemClick,
  handleUpdate,
  handleDelete,
  ...props
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Item>
      <TodoItem
        itemClick={itemClick}
        isDone={isDone}
        text={text}
        isUpdating={isMenuOpen}
        {...props}
      />
      {!isDone && (
        <KebabMenu
          isOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          closeMenu={closeMenu}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      )}
    </Item>
  );
};

export default Component;
