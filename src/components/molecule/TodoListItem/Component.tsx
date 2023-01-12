import React, { useState } from 'react';
import { TodoItem } from '../../atoms/TodoItem';
import styled from 'styled-components';
import { KebabMenu } from '../../atoms/KebabMenu';

const Item = styled.div`
  display: flex;
  border: solid 1px red;
  width: 290px;
  justify-content: space-between;
  align-items: center;
  padding-inline: 4px;
`;

export type Props = {
  text: string;
  isDone?: boolean;
  isUpdating?: boolean;
  isToBeDeleted?: boolean;
};

const Component = ({ text, ...props }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Item>
      <TodoItem text={text} isUpdating={isMenuOpen} {...props} />
      <KebabMenu
        isOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        closeMenu={closeMenu}
        handleUpdate={() => console.log('update')}
        handleDelete={() => console.log('delete')}
      />
    </Item>
  );
};

export default Component;
