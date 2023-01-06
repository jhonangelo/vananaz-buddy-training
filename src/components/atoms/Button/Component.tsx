import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<Props>`
  display: flex;
  border-radius: 4px;
  border: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.buttonType === 'primary' &&
    `background: rgba(47, 128, 237, 1);
      color: white;
      width: 260px;
      height: 38px;
      font-weight: 700;
      font-size: 14px;
      
      &:active {
        background: rgba(47, 128, 237, .15)
      }`}

  ${(props) =>
    props.buttonType === 'secondary' &&
    `background: rgba(47, 128, 237, .15);
      color: #2F80ED;
      width: 56px;
      height: 32px;
      font-size: 14px;
      font-weight: 400;`}

  ${(props) =>
    props.buttonType === 'warning' &&
    `background: rgba(252, 224, 224, 1);
      color: #ED2F2F;
      width: 80px;
      height: 38px;
      font-size: 14px;
      font-weight: 400;`}
`;

export type Props = {
  buttonType?: 'primary' | 'secondary' | 'warning';
  label?: string;
  onClick?: () => void;
};

const Component = ({
  buttonType,
  label,
  onClick,
  ...props
}: Props): React.ReactElement => {
  return (
    <StyledButton type='button' buttonType={buttonType} {...props}>
      {label}
    </StyledButton>
  );
};

export default Component;
