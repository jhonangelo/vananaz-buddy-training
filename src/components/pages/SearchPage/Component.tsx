import React, { useContext, useEffect, useState } from 'react';
import { SearchTemplate } from '../../templates/SearchTemplate';
import { TodoContextType, TodoContext, Todo } from '../../../hooks/todos/hooks';
import { showToastSuccess } from '../../atoms/ToastNotification/Component';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Component = (props: Props) => {
  const { todos, completeSelected, deleteSelected } =
    useContext<TodoContextType>(TodoContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Todo[]>([]);

  const navigate = useNavigate();

  const handleSearch = (input: string) => {
    setSearchTerm(input);
  };

  const handleCompleteSelected = (checkedItems: number[]) => {
    completeSelected(checkedItems);
    navigate('/');
    showToastSuccess('Todo do completed');
  };
  const handleDeleteSelected = (checkedItems: number[]) => {
    deleteSelected(checkedItems);
    navigate('/');
    showToastSuccess('Todo do deleted');
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = todos.filter((item) =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, todos]);

  return (
    <SearchTemplate
      data={searchResults}
      handleSearch={handleSearch}
      completeSelected={handleCompleteSelected}
      deleteSelected={handleDeleteSelected}
    />
  );
};

export default Component;
