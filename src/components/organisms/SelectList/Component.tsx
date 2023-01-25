import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CheckboxItem } from '../../molecule/CheckboxItem';
import { SelectModal } from '../../molecule/SelectModal';

const SelectListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  padding: 12px;
`;

type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

export type Props = {
  data: Todo[];
  completeSelected: (checkedItems: number[]) => void;
  deleteSelected: (checkedItems: number[]) => void;
};

const Component = ({ data, deleteSelected, completeSelected }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheck = (itemId: number) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((i) => i !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  const handleSelectAll = () => {
    if (!selectAll) {
      setCheckedItems(data.map((item) => item.id));
      setSelectAll(true);
    } else {
      setCheckedItems([]);
      setSelectAll(false);
    }
  };

  useEffect(() => {
    if (checkedItems.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [checkedItems]);
  return (
    <SelectListContainer>
      {data?.map(
        (item) =>
          !item.isDone && (
            <CheckboxItem
              checked={checkedItems.includes(item.id)}
              key={item.id}
              onCheck={() => handleCheck(item.id)}
              text={item.text}
            />
          )
      )}
      <SelectModal
        isOpen={isOpen}
        selectAllHandler={handleSelectAll}
        completeSelectedHandler={() => completeSelected(checkedItems)}
        deleteSelectedHandler={() => deleteSelected(checkedItems)}
      />
    </SelectListContainer>
  );
};

export default Component;
