import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';

const TodoItem = styled.p<
  Pick<Props, 'isUpdating' | 'isToBeDeleted' | 'isDone'>
>`
  color: ${theme.colors.gray1};
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  margin: 0;
  cursor: pointer;
  border: none;
  background: none;

  ${(props) =>
    props.isUpdating &&
    `
    color: ${theme.colors.blue2};
  `}

  ${(props) =>
    props.isToBeDeleted &&
    `
    color: ${theme.colors.red1};
  `}

  ${(props) =>
    props.isDone &&
    `
    text-decoration: line-through;
    color: ${theme.colors.blue2};
    
  `}
`;

export type Props = {
  text?: string;
  isUpdating?: boolean;
  itemClick?: () => void;
  isToBeDeleted?: boolean;
  isDone?: boolean;
};

const Component = ({ text, itemClick, ...props }: Props) => {
  return (
    <TodoItem as='button' onClick={itemClick} {...props}>
      {text}
    </TodoItem>
  );
};

export default Component;
