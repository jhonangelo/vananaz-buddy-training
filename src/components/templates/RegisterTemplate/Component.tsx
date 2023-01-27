import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { TextLink } from '../../atoms/TextLink';
import { RegisterForm } from '../../organisms/RegisterForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  row-gap: 20px;
  padding: 30px;
`;

const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.blue1};
  opacity: 0.15;
  height: 50px;
  width: 100%;
`;

const Link = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Message = styled.span`
  margin-right: 4px;
`;

export type Props = {
  submitRegister: () => void;
};

const Component = ({ submitRegister }: Props) => {
  return (
    <Container>
      <Block />
      <RegisterForm submitRegister={submitRegister} />
      <Link>
        <Message>Already have an account?</Message>
        <TextLink text='Login' linkTo='login' />
      </Link>
    </Container>
  );
};

export default Component;
