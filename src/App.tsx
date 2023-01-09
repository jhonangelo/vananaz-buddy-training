import React from 'react';
import './App.css';
import { Button } from './components/atoms/Button';
import { SearchInput } from './components/atoms/SearchInput';

function App() {
  return (
    <div className='App'>
      <Button label={'Login'} buttonType='primary' />
      <Button label={'Select'} buttonType='secondary' />
      <Button label={'No'} buttonType='warning' />
      <SearchInput />
    </div>
  );
}

export default App;
