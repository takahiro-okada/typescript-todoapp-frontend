import React from 'react';
import TodoForm from '../organisms/TodoForm';
import TodoList from '../organisms/TodoList';
import CountTodo from '../molecules/CountTodos';

export const Main: React.VFC = () => (
    <>
      <div className="container mx-auto  md:flex">
        <TodoForm />
        <CountTodo />
      </div>
      <TodoList />
    </>
  );
