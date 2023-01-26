import React, { useState } from 'react';
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

const InputContainer = styled.form<Props>`
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
  type?: 'text' | 'email' | 'password';
  hasClearButton?: boolean;
  currentValue?: string;
  formSubmit?: (input: string) => void;
  setUpdatedValue?: React.Dispatch<React.SetStateAction<string>>;
  onChangeText?: (input: string) => void;
};

const Component = ({
  label,
  type,
  currentValue,
  hasClearButton,
  formSubmit,
  setUpdatedValue,
  onChangeText,
}: Props): React.ReactElement => {
  const [input, setInput] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    input && input.length > 0 && formSubmit?.(input);
    currentValue && currentValue.length > 0 && formSubmit?.(currentValue);
    setInput('');
    setUpdatedValue?.('');
  };

  const handleChangeText = (textValue: string) => {
    setInput(textValue);
    onChangeText?.(textValue);
  };

  const clearInput = () => {
    setInput('');
    handleChangeText?.('');
  };

  return (
    <StyledDiv>
      {label && <StyledLabel>{label}</StyledLabel>}
      <InputContainer onSubmit={handleSubmit} formSubmit={formSubmit}>
        {currentValue ? (
          <TextInput
            type={type}
            value={currentValue}
            onChange={(event) => setUpdatedValue?.(event.target.value)}
          />
        ) : onChangeText ? (
          <TextInput
            type={type}
            value={input}
            onChange={(event) => handleChangeText(event.target.value)}
          />
        ) : (
          <TextInput
            type={type}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        )}

        {hasClearButton &&
          (input.length > 0 || (currentValue && currentValue.length > 0)) && (
            <IconWrapper>
              <Delete onClick={clearInput} />
            </IconWrapper>
          )}
      </InputContainer>
    </StyledDiv>
  );
};

export default Component;
