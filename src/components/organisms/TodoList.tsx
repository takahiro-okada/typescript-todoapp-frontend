/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-use-before-define */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TodoType } from '../../types/api/todo';
import { DeleteButton } from '../atoms/DeleteButton';
import { UpdateButton } from '../atoms/UpdateButton';

const TodoList = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [inputTodo, setinputTodo] = useState({
    title: '',
    description: '',
  });
  const handleChange = (event: any) => {
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
    <div className="container mx-auto flex justify-between items-center">
      <div className="mt-10 w-full bg-neutral-800 pb-16 rounded-lg">
        <div className="flex">
          <div className="rounded-tl-md text-white w-6/12 text-center py-3 bg-orange-600 text-xl bg-gradient-to-r from-[#FF512F] to-[#F09819]">
            Your Todos
          </div>
          <div className="rounded-tr-md text-white bg-gray-500 text-xl w-6/12 text-center py-3">Done Todos</div>
        </div>
        <ul className="text-left grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 px-8 mt-10">
          {todos.map((todo) => (
            <li className="rounded-2xl px-4 py-4 bg-neutral-700 rounded-md shadow-md shadow-white" key={todo.id}>
              <div className="text-white">Created Date:XXX.XX.XX</div>
              <div>
                <label htmlFor="task" className="text-white">
                  Task
                  <input
                    className="block rounded-md  px-2 py-2 text-black w-full"
                    id="task"
                    type="text"
                    name="title"
                    defaultValue={todo.title}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="description" className="text-white">
                  Description
                  <textarea
                    className="block rounded-md  px-2 py-2 text-black w-full"
                    id="description"
                    name="description"
                    defaultValue={todo.description}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <UpdateButton title="Update" onClick={() => editTodo(todo.id)} />
                <DeleteButton title="Delete" onClick={() => deleteTodo(todo.id)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
