import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { ReactComponent as Delete } from './Icons/delete.svg';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  color: ${theme.colors.gray3};
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  margin-bottom: 11px;
`;

const InputContainer = styled.div<Props>`
  display: flex;
  background: ${theme.colors.white};
  width: 260px;
  height: 32px;
  border: solid 1px ${theme.colors.gray3};
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;

  &:focus-within {
    outline: 2px solid ${theme.colors.blue1};
  }
`;

const TextInput = styled.input`
  border: none;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  margin-inline: 12px;

  &:focus {
    outline: none;
  }
`;

const IconWrapper = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  background-color: ${theme.colors.gray3};
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 6px;
`;

export type Props = {
  label?: string;
  type?: 'text' | 'email' | 'password';
  hasClearButton?: boolean;
  onChange?: () => void;
};

const Component = ({
  label,
  type,
  hasClearButton,
}: Props): React.ReactElement => {
  return (
    <StyledDiv>
      {label && <StyledLabel>{label}</StyledLabel>}
      <InputContainer>
        <TextInput type={type} />
        {hasClearButton && (
          <IconWrapper>
            <Delete />
          </IconWrapper>
        )}
      </InputContainer>
    </StyledDiv>
  );
};

export default Component;
