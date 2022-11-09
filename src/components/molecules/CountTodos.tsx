import { useAllTodos } from '../../hooks/userAllTodos';

const CountTodo = () => {
  const {incompleteTodosLength,completeTodosLength} = useAllTodos();
  return(
    <div className="mt-10 md:w-2/4 md:mt-0">
      <div className="text-white text-xl">You have {incompleteTodosLength} Todos.</div>
      <div className="text-white text-xl mt-5">You have done {completeTodosLength} Todos.</div>
    </div>
  )
}

export default CountTodo;