import React from 'react';
import GlobalStyles from './constants/themes/globalStyling';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AddTodoPage } from './components/pages/AddTodo';
import { ContextProvider } from './hooks/todos/hooks';
import { TodoListPage } from './components/pages/TodoList';
import { SelectListPage } from './components/pages/SelectList';
import { UpdateTodoPage } from './components/pages/UpdateTodo';
import { ToastNotification } from './components/atoms/ToastNotification';
import { SearchTodoPage } from './components/pages/SearchPage';
import { LoginPage } from './components/pages/LoginPage';

function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/todos' element={<TodoListPage />} />
        <Route path='/todos/add' element={<AddTodoPage />} />
        <Route path='/todos/select' element={<SelectListPage />} />
        <Route path='/todos/update' element={<UpdateTodoPage />} />
        <Route path='/todos/search' element={<SearchTodoPage />} />
      </Routes>
      <ToastNotification duration={1500} position='bottom-center' />
    </ContextProvider>
  );
}

export default App;
