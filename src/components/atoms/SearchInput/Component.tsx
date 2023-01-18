import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/themes';
import { ReactComponent as SearchIcon } from './Icons/search.svg';

const SearchContainer = styled.button`
  display: flex;
  background: ${theme.colors.white};
  width: 100%;
  height: 32px;
  border: 1px solid ${theme.colors.gray3};
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 9px;
  margin-bottom: 0.5px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export type Props = { onClick: () => void };

const SearchInput = ({ onClick }: Props): React.ReactElement => {
  return (
    <SearchContainer onClick={onClick}>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </SearchContainer>
  );
};

export default SearchInput;
