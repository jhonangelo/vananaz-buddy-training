import React from 'react';
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

export type Props = { backBtnClick: () => void; label: string };

const Component = ({ backBtnClick, label }: Props) => {
  return (
    <Wrapper>
      <BackButton onClick={backBtnClick} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Component;
