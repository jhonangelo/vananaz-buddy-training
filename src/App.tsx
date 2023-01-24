import React from 'react';
import GlobalStyles from './constants/themes/globalStyling';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AddTodoPage } from './components/pages/AddTodo';
import { ContextProvider } from './hooks/todos/hooks';
import { TodoListPage } from './components/pages/TodoList';

function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<AddTodoPage />} />
        <Route path='/todo-list' element={<TodoListPage />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
