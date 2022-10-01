import React from 'react';
import TodoForm from '../organisms/TodoForm';
import TodoList from '../organisms/TodoList';

export const Main: React.VFC = () => {
  console.log('hoge');

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};
