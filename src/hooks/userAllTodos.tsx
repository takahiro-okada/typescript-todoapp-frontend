import axios from 'axios';
import { useState,useEffect } from 'react';
import { TodoType } from '../types/api/todo';

export const useAllTodos = () => {
  const [allTodos, setAllTodos] = useState<Array<TodoType>>([]);
  const apiUrl = 'http://localhost:8080/todos/';

  // fetch
  useEffect(() => {
    axios
    .get<Array<TodoType>>(apiUrl)
      .then((response) => {
        setAllTodos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // delete
  const deleteTodo = (id: number) => {
    axios
      .delete<TodoType>(apiUrl + id.toString())
      .then((response) => {
        setAllTodos(allTodos.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.log(error));
  };

  const onClickCompeteTodo = (todo:TodoType) => {
    const value = {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      completed: !todo.isCompleted
    }

    axios
    .patch<TodoType>(`${apiUrl}${value.id}`, value)
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => console.log(error));
  }

  // reverse
  const onClickReverseTodo = (todo:TodoType) => {
    const value = {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      completed: !todo.isCompleted
    }

    axios
    .patch<TodoType>(`${apiUrl}${value.id}`, value)
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => console.log(error));
  }


  // Todo Array
  const incompleteTodos = allTodos.filter((output)=> output.isCompleted === false);
  const completeTodos = allTodos.filter((output)=> output.isCompleted === true);

  // Todo Length
  const incompleteTodosLength = incompleteTodos.length;
  const completeTodosLength = completeTodos.length;  

  return{
    allTodos,incompleteTodos,completeTodos,deleteTodo,onClickCompeteTodo,onClickReverseTodo,incompleteTodosLength,completeTodosLength,setAllTodos
  };
}