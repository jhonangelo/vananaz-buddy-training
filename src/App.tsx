import React from 'react';
import './App.css';
import { Button } from './components/atoms/Button';
import { Input } from './components/atoms/Input';
import { SearchInput } from './components/atoms/SearchInput';
import { TextLink } from './components/atoms/TextLink';

function App() {
  return (
    <div className='App'>
      <Button label={'Login'} buttonType='primary' />
      <Button label={'Select'} buttonType='secondary' />
      <Button label={'No'} buttonType='warning' />
      <Input label={'Email'} type={'text'} />
      <Input label={'Password'} type={'password'} hasClearButton />
      <SearchInput />
      <TextLink text={'Add your first to do'} linkTo={'abc.com'} />
    </div>
  );
}

export default App;
