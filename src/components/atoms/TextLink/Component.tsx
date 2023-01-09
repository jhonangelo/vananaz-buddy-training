import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: #2f80ed;
`;

export type Props = { text?: string; linkTo?: string };

const Component = ({ text, linkTo }: Props): React.ReactElement => {
  return <Link href={linkTo}>{text}</Link>;
};

export default Component;
