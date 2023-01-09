import React from 'react';
import styled from 'styled-components';

const RoundedIcon = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  background-color: #2f80ed;
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
