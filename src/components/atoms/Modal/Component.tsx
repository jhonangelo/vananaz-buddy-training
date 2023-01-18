import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import theme from '../../../constants/themes';

const StyledPopup = styled(Popup)`
  &-overlay {
    inset: auto auto 0 auto !important;
    background: ${theme.colors.background};
    width: 100%;
    height: max-content;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
  }
  &-content {
    width: 100%;
  }
`;

const ModalHeader = styled.div`
  font-size: 16px;
  color: ${theme.colors.black};
  font-weight: 400;
  text-align: center;
  margin-top: 19px;
`;

export type Props = {
  isOpen?: boolean;
  closeModal?: () => void;
  header?: string;
  children?: React.ReactNode;
  closeOnDocumentClick?: boolean;
};

const Component = ({
  isOpen,
  closeModal,
  header,
  children,
  closeOnDocumentClick,
}: Props): React.ReactElement => {
  return (
    <StyledPopup
      open={isOpen}
      closeOnDocumentClick={closeOnDocumentClick}
      onClose={closeModal}
      modal
      position={'bottom center'}
    >
      {header && <ModalHeader>{header}</ModalHeader>}
      {children}
    </StyledPopup>
  );
};
export default Component;
