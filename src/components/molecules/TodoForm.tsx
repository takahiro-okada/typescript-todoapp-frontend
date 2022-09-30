/* eslint-disable import/no-duplicates */
// eslint-disable-next-line no-use-before-define

import axios from 'axios';
import { ChangeEvent, useCallback, useState } from 'react';
import { TodoType } from '../../types/api/todo';

const TodoForm = () => {
  const apiUrl = 'http://localhost:8080/todos';
  const [todoText, setTodoText] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const [todos, setTodos] = useState<Array<TodoType>>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = {
    title: todoText,
    description: todoDescription,
  };

  const addTodo: any = useCallback(() => {
    axios
      .post<TodoType>(apiUrl, data)
      .then((response) => {
        setTodos([...todos, response.data]);
      })
      .catch((error) => {
        console.log(error.status);
      });
  }, [data, todos]);

  const onChangeTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };
  const onChangeTodoDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoDescription(event.target.value);
  };

  return (
    <div className="mt-5 text-left">
      <form>
        <p className="font-bold text-gray-50">Task</p>
        <input type="text" className="bg-white" defaultValue={todoText} onChange={onChangeTodoText} />
        <p className="font-bold text-gray-50 py0">Description</p>
        <input type="text" className="bg-white" defaultValue={todoDescription} onChange={onChangeTodoDescription} />
        <button
          type="submit"
          className="mt-5 block text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          onClick={addTodo}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
