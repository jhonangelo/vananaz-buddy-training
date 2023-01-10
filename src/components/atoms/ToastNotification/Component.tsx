import React from 'react';
import styled from 'styled-components';

const Toast = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 32px;
  background-color: #6fcf97;
  border-radius: 4px;
  color: #262626;
`;

export type Props = { message?: string };

const Component = ({ message }: Props): React.ReactElement => {
  return <Toast>{message}</Toast>;
};

export default Component;
