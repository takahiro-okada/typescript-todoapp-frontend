/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-use-before-define */
import axios from 'axios';
import { useState } from 'react';
import { useAllTodos } from '../../hooks/userAllTodos';
import { ReverseButton } from '../atoms/ReverseButton';
import { UpdateButton } from '../atoms/UpdateButton';
import { TodoType } from '../../types/api/todo';


const CompleteTodos = () => {  
  const {allTodos,completeTodos,deleteTodo,onClickReverseTodo} = useAllTodos();
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

  // UPDATE
  const editTodo = (id: number) => {
    const targetId = allTodos.filter((todo) => todo.id === id);

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
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  return(
    <div className="list-none text-left grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 px-8 mt-10">
        {completeTodos.map((todo) => (
          <li className="rounded-2xl px-4 py-4 bg-neutral-700 rounded-md shadow-md shadow-white" key={todo.id}>
            <div className="flex justify-between">
            <div className="text-white">Created Date:XXX.XX.XX</div>
              <button 
                  type="submit"
                  onClick={() => deleteTodo(todo.id)}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5H21M9 10V15M13 10V15M3 5H19L17.42 19.22C17.3658 19.7094 17.1331 20.1616 16.7663 20.49C16.3994 20.8184 15.9244 21 15.432 21H6.568C6.07564 21 5.60056 20.8184 5.23375 20.49C4.86693 20.1616 4.63416 19.7094 4.58 19.22L3 5ZM6.345 2.147C6.50675 1.80397 6.76271 1.514 7.083 1.31091C7.4033 1.10782 7.77474 0.999996 8.154 1H13.846C14.2254 0.999806 14.5971 1.10755 14.9176 1.31064C15.2381 1.51374 15.4942 1.80381 15.656 2.147L17 5H5L6.345 2.147V2.147Z" stroke="#FF512F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
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
              <ReverseButton title="Revert" onClick={() => onClickReverseTodo(todo)} />
            </div>
          </li>
        ))}
    </div>
  )
}

export default CompleteTodos;