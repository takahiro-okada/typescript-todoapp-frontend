import React from 'react';
import TodoForm from '../organisms/TodoForm';
import TodoList from '../organisms/TodoList';
import { useAllTodos } from '../../hooks/userAllTodos';

export const Main: React.VFC = () => {
  const {incompleteTodosLength,completeTodosLength} = useAllTodos();

  return (
    <>
      <div className="container mx-auto flex">
        <TodoForm />
        <div className="w-2/4">
          <div className="text-white text-xl">You have {incompleteTodosLength} Todos.</div>
          <div className="text-white text-xl mt-5">You have done {completeTodosLength} Todos.</div>
        </div>
      </div>
      <TodoList />
    </>
  );
};
