import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { Link } from 'react-router-dom';

const TextLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors.blue1};
  cursor: pointer;
`;

export type Props = { text: string; linkTo: string };

const Component = ({ text, linkTo }: Props): React.ReactElement => {
  return <TextLink to={linkTo}>{text}</TextLink>;
};

export default Component;
