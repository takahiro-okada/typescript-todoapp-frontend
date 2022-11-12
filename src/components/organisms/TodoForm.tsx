import axios from 'axios';
import { ChangeEvent, useCallback, useState } from 'react';
import { TodoType } from '../../types/api/todo';
import { Button } from '../atoms/Button';

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
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error.status);
      });
  }, [todoText, todoDescription, todos]);

  const onChangeTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };
  const onChangeTodoDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTodoDescription(event.target.value);
  };

  return (
    <div className="container mx-auto flex justify-between items-center md:w-2/4">
      <div className="mt-5 text-left w-full">
        <form>
          <p className="font-bold text-gray-50 text-2xl">Task</p>
          <input
            type="text"
            className="bg-neutral-700 rounded-md mt-3 text-xl px-3 py-3 w-full md:w-3/4 text-white"
            defaultValue={todoText}
            onChange={onChangeTodoText}
          />
          <p className="font-bold text-gray-50 py0 mt-8 text-2xl">Description</p>
          <textarea
            className="bg-neutral-700 rounded-md mt-3 text-xl px-3 py-3 w-full md:w-3/4 text-white"
            defaultValue={todoDescription}
            onChange={onChangeTodoDescription}
          />
          <div className="mt-10 w-full md:w-3/4">
            <Button title="Submit" onClick={addTodo} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
