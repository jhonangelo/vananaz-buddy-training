import React, { useState } from 'react';
import { TodoItem } from '../../atoms/TodoItem';
import styled from 'styled-components';
import { KebabMenu } from '../../atoms/KebabMenu';

const Item = styled.div`
  display: flex;
  width: 290px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 6px 8px 6px;
`;

export type Props = {
  text: string;
  isDone?: boolean;
  isUpdating?: boolean;
  isToBeDeleted?: boolean;
  handleUpdate: () => void;
  handleDelete: () => void;
};

const Component = ({ text, handleUpdate, handleDelete, ...props }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Item>
      <TodoItem text={text} isUpdating={isMenuOpen} {...props} />
      <KebabMenu
        isOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        closeMenu={closeMenu}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </Item>
  );
};

export default Component;