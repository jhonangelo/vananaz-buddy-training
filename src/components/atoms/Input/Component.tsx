import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Delete } from './Icons/delete.svg';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  color: #828282;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  margin-bottom: 11px;
`;

const InputContainer = styled.div<Props>`
  display: flex;
  background: white;
  width: 260px;
  height: 32px;
  border: solid 1px #828282;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;

  &:focus-within {
    outline: 2px solid #2f80ed;
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
  background-color: #828282;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 6px;
`;

export type Props = {
  label?: string;
  inputType?: string;
  clearOption?: boolean;
  onChange?: () => void;
};

const Component = ({
  label,
  inputType,
  clearOption,
}: Props): React.ReactElement => {
  return (
    <StyledDiv>
      {label && <StyledLabel>{label}</StyledLabel>}
      <InputContainer>
        <TextInput type={inputType} />
        {clearOption && (
          <IconWrapper>
            <Delete />
          </IconWrapper>
        )}
      </InputContainer>
    </StyledDiv>
  );
};

export default Component;
