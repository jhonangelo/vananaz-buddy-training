import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { TodoItem } from '../../atoms/TodoItem';
import CheckIcon from './Icons/check.svg';

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  min-width: 20px;
  height: 20px;
  background: none;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid ${theme.colors.gray3};
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  align-self: baseline;
  :checked {
    border: none;
    background: url(${CheckIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${theme.colors.green3};
  }
`;

export type Props = { text?: string; onCheck: () => void };

const Component = ({ text, onCheck }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
    !isChecked && onCheck();
  };
  return (
    <CheckboxItem>
      <Checkbox checked={isChecked} onChange={handleCheck} />
      <TodoItem text={text} />
    </CheckboxItem>
  );
};

export default Component;
