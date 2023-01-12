import React from 'react';
import styled from 'styled-components';

const TodoItem = styled.p<Props>`
  color: #333333;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  margin: 0;

  ${(props) =>
    props.isUpdating &&
    `
    color: #9EB7DA;
  `}

  ${(props) =>
    props.isToBeDeleted &&
    `
    color: #E78585;
  `}

  ${(props) =>
    props.isDone &&
    `
    text-decoration: line-through;
    color: #9EB7DA;
  `}
`;

export type Props = {
  text?: string;
  isUpdating?: boolean;
  isToBeDeleted?: boolean;
  isDone?: boolean;
};

const Component = ({ text, ...props }: Props) => {
  return <TodoItem {...props}>{text}</TodoItem>;
};

export default Component;
