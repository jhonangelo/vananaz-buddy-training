import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<Props>`
  display: flex;
  border-radius: 4px;
  border: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }

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
    props.buttonType === 'modalButton' &&
    `background: ${props.bgColor};
      color:  ${props.color};
      width: 80px;
      height: 38px;
      font-size: 14px;
      font-weight: 400;`}
`;

export type Props = {
  buttonType?: 'primary' | 'secondary' | 'modalButton';
  label?: string;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
};

const Component = ({
  buttonType,
  label,
  ...props
}: Props): React.ReactElement => {
  return (
    <StyledButton type='button' buttonType={buttonType} {...props}>
      {label}
    </StyledButton>
  );
};

export default Component;
