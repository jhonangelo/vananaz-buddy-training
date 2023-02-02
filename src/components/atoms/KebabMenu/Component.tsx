import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { ReactComponent as Kebab } from './Icons/kebab.svg';

const PopupMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 115px;
  height: 71px;
  padding: 12px;
  gap: 14px;
  margin-right: 2px;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

  &:hover {
    color: ${theme.colors.blue1};
  }

  &:focus {
    outline: none;
  }
`;

const KebabButton = styled(Kebab)<{ isopen: string }>`
  cursor: pointer;
  min-width: 20px;
  circle {
    fill: ${(props) =>
      props.isopen === 'true' ? theme.colors.blue1 : '#C4C4C4'};
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
      trigger={<KebabButton isopen={isOpen.toString()} />}
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
