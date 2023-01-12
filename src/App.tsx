import React from 'react';
import './App.css';
import { TodoListItem } from './components/molecule/TodoListItem';

function App() {
  return (
    <div className='App'>
      <TodoListItem text='Test todo' />
    </div>
  );
}

export default App;
