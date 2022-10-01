/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-use-before-define */
import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { TodoType } from '../../types/api/todo';

const TodoList = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [inputTodo, setinputTodo] = useState({
    title: '',
    description: '',
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setinputTodo({ ...inputTodo, [name]: value });
  };

  const apiUrl = 'http://localhost:8080/todos/';

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
    const targetId = todos.filter((todo) => todo.id === id);

    if (inputTodo.title !== '') {
      if (targetId[0].title !== inputTodo.title) {
        targetId[0].title = inputTodo.title;
      }
    }
    if (inputTodo.description !== '') {
      if (inputTodo.description !== targetId[0].description) {
        targetId[0].description = inputTodo.description;
      }
    }

    const data = {
      title: targetId[0].title,
      description: targetId[0].description,
    };

    axios
      .patch<TodoType>(apiUrl + id.toString(), data)
      .then((response) => {
        console.log(response);
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
              <input type="text" name="title" defaultValue={todo.title} onChange={handleChange} />
            </div>
            <div>
              Description:
              <input type="text" name="description" defaultValue={todo.description} onChange={handleChange} />
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
