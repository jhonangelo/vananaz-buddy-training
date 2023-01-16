import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HomeButton } from './Icons/home.svg';
import theme from '../../../constants/themes';
import { SearchInput } from '../../atoms/SearchInput';
import { Button } from '../../atoms/Button';

const Container = styled.div``;

const AppLogo = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${theme.colors.blue1}; ;
`;

const TemplateHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TemplateContent = styled.div``;

type Props = {};

const Component = (props: Props) => {
  return (
    <Container>
      <TemplateHeader style={{ display: 'flex', flexDirection: 'row' }}>
        <AppLogo>ToDoish</AppLogo>
        <HomeButton />
      </TemplateHeader>
      <TemplateContent>
        <SearchInput />
        <Button label='Search' buttonType='secondary' />
      </TemplateContent>
    </Container>
  );
};

export default Component;
