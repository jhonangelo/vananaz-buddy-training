import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { LoginForm } from '../../organisms/LoginForm';
import { ReactComponent as HeroIcon } from './Icons/hero_icon.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const HeroImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 7px;
  height: 40vh;
  width: 100vw;
  background-color: rgb(47, 128, 237, 0.15);
`;

const Header = styled.h1`
  color: ${theme.colors.blue1};
`;

const SubHeader = styled.p`
  color: ${theme.colors.blue3};
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
`;

export type Props = {
  submitLogin: (user: User) => void;
};

type User = { username: string; password: string };

const Component = ({ submitLogin }: Props) => {
  return (
    <Container>
      <HeroImage>
        <HeroIcon />
        <Header>ToDoish</Header>
        <SubHeader>Do your wish, very easyish</SubHeader>
      </HeroImage>
      <FormWrapper>
        <LoginForm submitLogin={submitLogin} />
      </FormWrapper>
    </Container>
  );
};

export default Component;
