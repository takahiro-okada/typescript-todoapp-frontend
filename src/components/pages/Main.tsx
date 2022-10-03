import React from 'react';
import TodoForm from '../organisms/TodoForm';
import TodoList from '../organisms/TodoList';

export const Main: React.VFC = () => {
  console.log('hoge');

  return (
    <>
      <div className="container mx-auto flex">
        <TodoForm />
        <div className="w-2/4">
          <div className="text-white text-xl">You have 10 Todos.</div>
          <div className="text-white text-xl mt-5">You have done 5 Todos.</div>
        </div>
      </div>
      <TodoList />
    </>
  );
};
