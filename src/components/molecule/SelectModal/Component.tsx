import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';

import { Modal } from '../../atoms/Modal';

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 22px;
  margin-left: 39px;
`;

const ButtonLink = styled.button`
  background: none;
  border: none;
  width: fit-content;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : theme.colors.black)};
  &:focus {
    outline: none;
  }
`;

export type Props = {
  isOpen?: boolean;
  closeModal?: () => void;
  selectAllHandler: () => void;
  completeSelectedHandler: () => void;
  deleteSelectedHandler: () => void;
};

const Component = ({
  isOpen,
  closeModal,
  selectAllHandler,
  completeSelectedHandler,
  deleteSelectedHandler,
}: Props) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} closeOnDocumentClick={false}>
      <Controls>
        <ButtonLink onClick={selectAllHandler}>Select All</ButtonLink>
        <ButtonLink onClick={completeSelectedHandler}>
          Complete Selected
        </ButtonLink>
        <ButtonLink onClick={deleteSelectedHandler} color='red'>
          Delete Selected
        </ButtonLink>
      </Controls>
    </Modal>
  );
};

export default Component;
