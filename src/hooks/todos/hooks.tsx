import React, { useReducer, createContext, useEffect } from 'react';

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
  deleteTodo: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: (text: string) => {},
  deleteTodo: (id: number) => {},
});

type TodoAction = {
  type: 'add-todo' | 'delete-todo';
  payload: Todo | any;
};

const reducer = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case 'add-todo':
      return [...state, action.payload];
    case 'delete-todo':
      return action.payload.length > 0 ? [...action.payload] : [];
    default:
      return state;
  }
};

export const ContextProvider = ({ children }: Props) => {
  const [todos, dispatch] = useReducer(reducer, []);

  const addTodo = (text: string) => {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    const newTodoItem = { id: newId, text, isDone: false };
    dispatch({
      type: 'add-todo',
      payload: newTodoItem,
    });
  };

  const deleteTodo = (id: number) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    dispatch({ type: 'delete-todo', payload: filteredTodo });
  };

  useEffect(() => {
    const localStorageData = JSON.parse(
      localStorage.getItem('todos') || '[]'
    ) as Todo[];
    localStorageData?.forEach((todo: Todo) => {
      dispatch({ type: 'add-todo', payload: todo });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify([...todos]));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
