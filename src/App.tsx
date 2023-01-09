import React from 'react';
import './App.css';
import { Button } from './components/atoms/Button';
import { Input } from './components/atoms/Input';

function App() {
  return (
    <div className='App'>
      <Button label={'Login'} buttonType='primary' />
      <Button label={'Select'} buttonType='secondary' />
      <Button label={'No'} buttonType='warning' />
      <Input label={'Email'} inputType={'text'} />
      <Input label={'Password'} inputType={'password'} clearOption />
    </div>
  );
}

export default App;
