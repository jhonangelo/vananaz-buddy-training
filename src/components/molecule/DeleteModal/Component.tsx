import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';

import { Button } from '../../atoms/Button';
import { Modal } from '../../atoms/Modal';

const Controls = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 17px;
`;

export type Props = {
  isOpen?: boolean;
  closeModal: () => void;
  noBtnClick: () => void;
  yesBtnClick: () => void;
};

const Component = ({ isOpen, closeModal, noBtnClick, yesBtnClick }: Props) => {
  return (
    <Modal
      header='Delete to do?'
      isOpen={isOpen}
      closeModal={closeModal}
      closeOnDocumentClick={true}
    >
      <Controls>
        <Button
          label='No'
          buttonType='modalButton'
          bgColor='#FCE0E0'
          color='#ED2F2F'
          onClick={noBtnClick}
        />
        <Button
          label='Yes'
          buttonType='modalButton'
          bgColor={`${theme.colors.blue1}`}
          color={`${theme.colors.white}`}
          onClick={yesBtnClick}
        />
      </Controls>
    </Modal>
  );
};

export default Component;
