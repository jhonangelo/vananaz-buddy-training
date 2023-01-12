import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { ReactComponent as Kebab } from './Icons/kebab.svg';

const PopupMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 115px;
  padding: 12px;
  gap: 14px;
  margin-right: 8px;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

  &:focus {
    outline: none;
  }
`;

const KebabButton = styled(Kebab)<{ isOpen: boolean }>`
  cursor: pointer;
  circle {
    fill: ${(props) => (props.isOpen ? '#2F80ED' : '#C4C4C4')};
  }
`;

export type Props = {
  isOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeMenu: () => void;
  handleUpdate: () => void;
  handleDelete: () => void;
};

const Component = ({
  isOpen,
  setIsMenuOpen,
  closeMenu,
  handleUpdate,
  handleDelete,
}: Props): React.ReactElement => {
  const updateTodo = () => {
    handleUpdate();
    closeMenu();
  };
  const deleteTodo = () => {
    handleDelete();
    closeMenu();
  };
  return (
    <Popup
      trigger={
        <KebabButton
          isOpen={isOpen}
          onClick={() => setIsMenuOpen((preState) => !preState)}
        />
      }
      open={isOpen}
      position='left top'
      on='click'
      closeOnDocumentClick
      contentStyle={{ padding: '0px', border: 'none' }}
      arrow={false}
      onOpen={() => setIsMenuOpen(true)}
      onClose={() => setIsMenuOpen(false)}
    >
      <PopupMenu>
        <Button onClick={updateTodo}>Update</Button>
        <Button onClick={deleteTodo}>Delete</Button>
      </PopupMenu>
    </Popup>
  );
};

export default Component;
