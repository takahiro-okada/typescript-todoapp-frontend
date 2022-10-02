import axios from 'axios';
import { ChangeEvent, useCallback, useState } from 'react';
import { TodoType } from '../../types/api/todo';

const TodoForm = () => {
  const apiUrl = 'http://localhost:8080/todos';
  const [todoText, setTodoText] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const addTodo = useCallback(() => {
    const data = {
      title: todoText,
      description: todoDescription,
    };
    axios
      .post<TodoType>(apiUrl, data)
      .then((response) => {
        setTodos([...todos, response.data]);
      })
      .catch((error) => {
        console.log(error.status);
      });
  }, [todoText, todoDescription, todos]);

  const onChangeTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };
  const onChangeTodoDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoDescription(event.target.value);
  };

  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="mt-5 text-left">
        <form>
          <p className="font-bold text-gray-50">Task</p>
          <input
            type="text"
            className="bg-white rounded-md w-6/12 text-xl px-3 py-3"
            defaultValue={todoText}
            onChange={onChangeTodoText}
          />
          <p className="font-bold text-gray-50 py0">Description</p>
          <input
            type="text"
            className="bg-white rounded-md w-6/12 text-xl px-3 py-3"
            defaultValue={todoDescription}
            onChange={onChangeTodoDescription}
          />
          <button
            type="submit"
            className="mt-5 block text-white  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            onClick={addTodo}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
