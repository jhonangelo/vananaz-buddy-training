import React, { useReducer, createContext } from 'react';

type Props = {
  children: React.ReactNode;
};

type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

export type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: (text: string) => {},
});

type TodoAction = {
  type: 'add-todo';
  payload: Todo;
};

const reducer = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case 'add-todo':
      return [...state, action.payload];

    default:
      return state;
  }
};

export const ContextProvider = ({ children }: Props) => {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 0, text: 'Book an appointment', isDone: false },
    { id: 1, text: 'Get my parcel from LBC', isDone: false },
    { id: 2, text: 'Buy new shoes', isDone: true },
  ]);

  const addTodo = (text: string) => {
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 0;
    dispatch({
      type: 'add-todo',
      payload: { id: newId, text, isDone: false },
    });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
