import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { ReactComponent as BackBtn } from './Icons/back.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 13px;
`;

const BackButton = styled(BackBtn)`
  cursor: pointer;
  height: 19px;
  width: 7px;
`;

const Label = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${theme.colors.black};
`;

export type Props = { label: string };

const Component = ({ label }: Props) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <BackButton onClick={() => navigate(-1)} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Component;
