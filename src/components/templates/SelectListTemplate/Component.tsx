import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { BackButton } from '../../atoms/BackButton';
import { TextLink } from '../../atoms/TextLink';
import { SelectList } from '../../organisms/SelectList';
import { ReactComponent as EmptyIcon } from './Icons/empty.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
  row-gap: 20px;
`;

const SelectListContainer = styled.div`
  height: 100%;
  display: flex;
`;

const EmptyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
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

const SelectItemListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export type Props = {
  data: Todo[];
  completeSelected: (checkedItems: number[]) => void;
  deleteSelected: (checkedItems: number[]) => void;
};

const Component = ({ data = [], completeSelected, deleteSelected }: Props) => {
  return (
    <Container>
      <BackButton label='Select to do' />
      <SelectItemListWrapper>
        {data.filter((item) => item.completed === false).length > 0 ? (
          <SelectListContainer>
            <SelectList
              data={data}
              completeSelected={completeSelected}
              deleteSelected={deleteSelected}
            />
          </SelectListContainer>
        ) : (
          <EmptyContainer>
            <EmptyIcon />
            <QuoteMessage>No to do yet</QuoteMessage>
            <TextLink text='Add your first to do' linkTo='/todos/add' />
          </EmptyContainer>
        )}
      </SelectItemListWrapper>
    </Container>
  );
};

export default Component;
