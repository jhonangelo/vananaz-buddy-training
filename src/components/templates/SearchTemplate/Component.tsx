import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { BackButton } from '../../atoms/BackButton';
import { Input } from '../../atoms/Input';

import { SelectList } from '../../organisms/SelectList';
import { ReactComponent as EmptyIcon } from './Icons/empty.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
`;

const Controls = styled.div`
  margin-top: 20px;
`;

const SearchListWrapper = styled.div`
  margin-top: 6px;
  flex: 1;
  overflow-y: auto;
`;

const EmptyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const StyledEmptyIcon = styled(EmptyIcon)`
  margin-bottom: 22px;
`;

const QuoteMessage = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  color: ${theme.colors.gray3};
  margin-bottom: 6px;
`;

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

export type Props = {
  data?: Todo[];
  backBtnClick: () => void;
  completeSelected: () => void;
  deleteSelected: () => void;
};

const Component = ({
  data = [],
  backBtnClick,
  completeSelected,
  deleteSelected,
}: Props) => {
  return (
    <Container>
      <BackButton label='Search to do' backBtnClick={backBtnClick} />
      <Controls>
        <Input hasClearButton />
      </Controls>
      <SearchListWrapper>
        {data?.length > 0 ? (
          <SelectList
            data={data}
            completeSelected={completeSelected}
            deleteSelected={deleteSelected}
          />
        ) : data?.length === 0 ? (
          <EmptyContainer>
            <StyledEmptyIcon />
            <QuoteMessage>No to do found.</QuoteMessage>
            <QuoteMessage>Try different keywords.</QuoteMessage>
          </EmptyContainer>
        ) : (
          <EmptyContainer></EmptyContainer>
        )}
      </SearchListWrapper>
    </Container>
  );
};

export default Component;
