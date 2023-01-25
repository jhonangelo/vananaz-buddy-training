import React, { useEffect, useState } from 'react';
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
  isOpen: boolean;
};

const Component = ({
  text,
  isDone,
  itemClick,
  handleUpdate,
  handleDelete,
  isOpen,
  ...props
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToBeDeleted, setisToBeDeleted] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleKebabDelete = () => {
    setisToBeDeleted(true);
    handleDelete();
  };

  useEffect(() => {
    !isOpen && setisToBeDeleted(false);
  }, [isOpen]);

  return (
    <Item>
      <TodoItem
        itemClick={itemClick}
        isDone={isDone}
        text={text}
        isUpdating={isMenuOpen}
        isToBeDeleted={isToBeDeleted}
        {...props}
      />
      {!isDone && (
        <KebabMenu
          isOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          closeMenu={closeMenu}
          handleUpdate={handleUpdate}
          handleDelete={handleKebabDelete}
        />
      )}
    </Item>
  );
};

export default Component;
