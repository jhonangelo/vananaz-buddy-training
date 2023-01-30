import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { ReactComponent as Delete } from './Icons/delete.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${theme.colors.gray3};
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  margin-bottom: 11px;
`;

const InputContainer = styled.div`
  display: flex;
  background: ${theme.colors.white};
  width: 100%;
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
  flex: 1;
  margin-inline: 12px;

  &:focus {
    outline: none;
  }
`;

const IconWrapper = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.gray3};
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 6px;
`;

export type Props = {
  label?: string;
  type: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasClearButton?: boolean;
  clearInput?: () => void;
};

const Input = ({
  label,
  type,
  value,
  onChange,
  hasClearButton,
  clearInput,
}: Props) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputContainer>
        <TextInput type={type} value={value} onChange={onChange} />
        {hasClearButton && (
          <IconWrapper>
            <Delete onClick={clearInput} />
          </IconWrapper>
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;
