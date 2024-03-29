import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { Todo } from '../../../hooks/todos/hooks';
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

export type Props = {
  data?: Todo[];
  handleSearch: (input: string) => void;
  completeSelected: (checkedItems: number[]) => void;
  deleteSelected: (checkedItems: number[]) => void;
};

const Component = ({
  data = [],
  handleSearch,
  completeSelected,
  deleteSelected,
}: Props) => {
  const [input, setInput] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    handleSearch(event.target.value);
  };

  const clearInput = () => {
    setInput('');
  };
  return (
    <Container>
      <BackButton label='Search to do' />
      <Controls>
        <Input
          type='text'
          value={input}
          hasClearButton
          clearInput={clearInput}
          onChange={handleChange}
        />
      </Controls>
      <SearchListWrapper>
        {data?.length > 0 ? (
          <SelectList
            data={data}
            completeSelected={completeSelected}
            deleteSelected={deleteSelected}
          />
        ) : input.length > 0 && data?.length === 0 ? (
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
