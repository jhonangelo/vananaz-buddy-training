import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';

const RoundedIcon = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  background-color: ${theme.colors.blue1};
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;

export type Props = { onClick?: () => void };

const Component = ({ onClick }: Props) => {
  return <RoundedIcon onClick={onClick}>+</RoundedIcon>;
};

export default Component;
