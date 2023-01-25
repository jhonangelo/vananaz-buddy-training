import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HomeButton } from './Icons/home.svg';
import theme from '../../../constants/themes';
import { SearchInput } from '../../atoms/SearchInput';
import { Button } from '../../atoms/Button';
import { RoundedIconBtn } from '../../atoms/RoundedIconBtn';
import { ReactComponent as EmptyIcon } from './Icons/empty.svg';
import { TextLink } from '../../atoms/TextLink';
import { TodoList } from '../../organisms/TodoList';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 16px 16px 0px 16px;
  height: 100vh;
  box-sizing: border-box;
`;

const AppLogo = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${theme.colors.blue1}; ;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  row-gap: 9px;
  justify-content: space-between;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 9px;
`;

const StyledSeachInput = styled(SearchInput)`
  flex: 1;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QuoteMessage = styled.p`
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  font-weight: 400;
  color: ${theme.colors.gray3};
  margin-top: 22px;
  margin-bottom: 13px;
`;

const TodoListContainer = styled.div`
  display: flex;
  flex: 1;
`;

const TodoItemListWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  color: ${theme.colors.gray3};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 21px;
  right: 24px;
`;

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

export type Props = {
  data?: Todo[];
  homeBtnClick: () => void;
  SearchInputClick: () => void;
  SearchBtnClick: () => void;
  itemClick: () => void;
  handleUpdate: () => void;
  handleDelete: (id: number) => void;
  AddTodoBtnClick: () => void;
  linkTo: string;
};

const Component = ({
  data = [],
  homeBtnClick,
  SearchInputClick,
  SearchBtnClick,
  itemClick,
  handleUpdate,
  handleDelete,
  AddTodoBtnClick,
  linkTo,
}: Props) => {
  return (
    <Container>
      <Header>
        <AppLogo>ToDoish</AppLogo>
        <HomeButton cursor='pointer' onClick={homeBtnClick} />
      </Header>
      <Controls>
        <StyledSeachInput onClick={SearchInputClick} />
        <Button
          label='Select'
          buttonType='secondary'
          onClick={SearchBtnClick}
        />
      </Controls>
      <TodoItemListWrapper>
        {data?.length > 0 ? (
          <TodoListContainer>
            <TodoList
              data={data}
              itemClick={itemClick}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          </TodoListContainer>
        ) : (
          <EmptyContainer>
            <EmptyIcon />
            <QuoteMessage>To do list increases productivity</QuoteMessage>
            <TextLink text='Add your first to do' linkTo={linkTo} />
          </EmptyContainer>
        )}
      </TodoItemListWrapper>
      <ButtonWrapper>
        <RoundedIconBtn onClick={AddTodoBtnClick} />
      </ButtonWrapper>
    </Container>
  );
};

export default Component;
