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
  completeTodo: (id: number) => void;
  deleteSelected: (checkedItems: number[]) => void;
  completeSelected: (checkedItems: number[]) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: (text: string) => {},
  deleteTodo: (id: number) => {},
  completeTodo: (id: number) => {},
  deleteSelected: (checkedItems: number[]) => {},
  completeSelected: (checkedItems: number[]) => {},
});

type TodoAction = {
  type: 'add-todo' | 'delete-todo' | 'delete-selected' | 'complete-selected';
  payload: Todo | any;
};

const reducer = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case 'add-todo':
      return [...state, action.payload];
    case 'delete-todo':
      return action.payload.length > 0 ? [...action.payload] : [];
    case 'delete-selected':
      return [...action.payload];
    case 'complete-selected':
      return [...action.payload];
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

  const deleteSelected = (checkedItems: number[]) => {
    const filteredCheckedItems = todos.filter(
      (todo) => !checkedItems.includes(todo.id)
    );
    dispatch({ type: 'delete-selected', payload: filteredCheckedItems });
  };

  const completeTodo = (id: number) => {
    const item = todos.find((item) => item.id === id);
    if (item) item.isDone = true;
    const filteredItem = todos.filter((item) => item.id !== id);
    dispatch({ type: 'complete-selected', payload: [...filteredItem, item] });
  };

  const completeSelected = (checkedItems: number[]) => {
    const filteredCheckItem = todos.filter((item) =>
      checkedItems.includes(item.id)
    );
    const completedItems = filteredCheckItem.map((item) => ({
      ...item,
      isDone: true,
    }));
    const updatedTodos = todos.map((item) =>
      checkedItems.includes(item.id)
        ? completedItems.find((t) => t.id === item.id)
        : item
    );
    dispatch({
      type: 'complete-selected',
      payload: updatedTodos,
    });
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
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        completeTodo,
        deleteSelected,
        completeSelected,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
