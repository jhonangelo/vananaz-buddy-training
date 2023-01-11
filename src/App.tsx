import React, { useState } from 'react';
import './App.css';
import { Button } from './components/atoms/Button';
import { Input } from './components/atoms/Input';
import { SearchInput } from './components/atoms/SearchInput';
import { TextLink } from './components/atoms/TextLink';
import { RoundedIconBtn } from './components/atoms/RoundedIconBtn';
import { ToastNotification } from './components/atoms/ToastNotification';
import { showToast } from './components/atoms/ToastNotification/Component';
import { TodoItem } from './components/atoms/TodoItem';
import { Modal } from './components/atoms/Modal';
import { KebabMenu } from './components/atoms/KebabMenu';

function App() {
  const [isOpen, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
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
      <button onClick={() => setOpen((prevState) => !prevState)}>
        Open Modal
      </button>
      <Modal header='Delete to do?' isOpen={isOpen} closeModal={closeModal} />
      <KebabMenu
        handleUpdate={() => console.log('abc')}
        handleDelete={() => console.log('new')}
      />
    </div>
  );
}

export default App;
