import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Todo } from '../../types/api/todo';

const TodoList = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const apiUrl = 'http://localhost:8080/products';
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-10">
      <ul className="text-left grid grid-cols-4 gap-4 ">
        {todos.map((todo) => (
          <li className="rounded-2xl px-4 py-4 bg-white">
            <div>作成日:XXX.XX.XX</div>
            <div>Task:{todo.name}</div>
            <div>Description:{todo.price}</div>
            <button
              type="button"
              className="font-bold mt-3 block text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
