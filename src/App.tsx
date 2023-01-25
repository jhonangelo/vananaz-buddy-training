import React from 'react';
import GlobalStyles from './constants/themes/globalStyling';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AddTodoPage } from './components/pages/AddTodo';
import { ContextProvider } from './hooks/todos/hooks';
import { TodoListPage } from './components/pages/TodoList';
import { SelectListPage } from './components/pages/SelectList';
import { ToastNotification } from './components/atoms/ToastNotification';

function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<TodoListPage />} />
        <Route path='/add' element={<AddTodoPage />} />
        <Route path='/select' element={<SelectListPage />} />
      </Routes>
      <ToastNotification duration={1500} position='bottom-center' />
    </ContextProvider>
  );
}

export default App;
