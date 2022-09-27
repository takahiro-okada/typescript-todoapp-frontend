const TodoForm = () => {
  const listHeader = ['Home', 'About', 'Contact'];

  return (
    <div className="mt-5 text-left">
      <form>
        <p className="font-bold text-gray-50">Task</p>
        <input type="text" className="bg-white" />
        <p className="font-bold text-gray-50 py0">Description</p>
        <input type="text" className="bg-white" />
        <button
          type="submit"
          className="mt-5 block text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
