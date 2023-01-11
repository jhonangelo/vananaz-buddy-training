import React from 'react';
import './App.css';
import { Button } from './components/atoms/Button';
import { Input } from './components/atoms/Input';
import { SearchInput } from './components/atoms/SearchInput';
import { TextLink } from './components/atoms/TextLink';
import { RoundedIconBtn } from './components/atoms/RoundedIconBtn';
import { ToastNotification } from './components/atoms/ToastNotification';
import { showToast } from './components/atoms/ToastNotification/Component';
import { TodoItem } from './components/atoms/TodoItem';

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
      <RoundedIconBtn />
      <button onClick={() => showToast('Todo saved')}>Toast trigger</button>
      <ToastNotification duration={3000} position='top-right' />
      <TodoItem text='Test Todo Item' />
      <TodoItem text='Test Todo Item' isDone />
      <TodoItem text='Test Todo Item' isUpdating />
      <TodoItem text='Test Todo Item' isToBeDeleted />
    </div>
  );
}

export default App;
