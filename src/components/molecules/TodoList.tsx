/* eslint-disable @typescript-eslint/no-use-before-define */
import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { TodoType } from '../../types/api/todo';

const TodoList = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [todoText, setTodoText] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const apiUrl = 'http://localhost:8080/todos/';

  const data = {
    title: todoText,
    description: todoDescription,
  };

  const onChangeTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };
  const onChangeTodoDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoDescription(event.target.value);
  };

  // GET
  useEffect(() => {
    axios
      .get<Array<TodoType>>(apiUrl)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // UPDATE
  const editTodo = (id: number) => {
    setTodoText(todoText);
    setTodoDescription(todoDescription);
    axios
      .patch<TodoType>(apiUrl + id.toString(), data)
      .then((response) => {
        const updateTodo = todos.map((todo) => {
          if (todo.id === response.data.id) {
            return response.data;
          }
          return todo;
        });
        setTodos(updateTodo);
      })
      .catch((error) => console.log(error));
  };

  // DELETE
  const deleteTodo = (id: number) => {
    axios
      .delete<TodoType>(apiUrl + id.toString())
      .then((response) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-10">
      <ul className="text-left grid grid-cols-4 gap-4 ">
        {todos.map((todo) => (
          <li className="rounded-2xl px-4 py-4 bg-white" key={todo.id}>
            <div>Created Date:XXX.XX.XX</div>
            <div>
              Task:
              <input type="text" defaultValue={todo.title} onChange={onChangeTodoText} />
            </div>
            <div>
              Description:
              <input type="text" defaultValue={todo.description} onChange={onChangeTodoDescription} />
            </div>

            <button
              type="button"
              className="font-bold mt-3 block text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            <button
              type="button"
              className="font-bold mt-3 block text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              onClick={() => editTodo(todo.id)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
