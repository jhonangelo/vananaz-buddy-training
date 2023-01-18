import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { TextLink } from '../../atoms/TextLink';
import { SelectList } from '../../organisms/SelectList';
import { ReactComponent as BackBtn } from './Icons/back.svg';
import { ReactComponent as EmptyIcon } from './Icons/empty.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
  row-gap: 20px;
`;

const Header = styled.div`
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
  text: string;
  isDone: boolean;
}

export type Props = {
  data: Todo[];
  completeSelected: () => void;
  deleteSelected: () => void;
  backBtnClick: () => void;
};

const Component = ({
  data = [],
  completeSelected,
  deleteSelected,
  backBtnClick,
}: Props) => {
  return (
    <Container>
      <Header>
        <BackButton onClick={backBtnClick} />
        <Label>Select to do</Label>
      </Header>
      <SelectItemListWrapper>
        {data?.length > 0 ? (
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
            <TextLink text='Add your first to do' linkTo='' />
          </EmptyContainer>
        )}
      </SelectItemListWrapper>
    </Container>
  );
};

export default Component;
