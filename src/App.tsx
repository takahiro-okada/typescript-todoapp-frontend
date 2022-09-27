import './App.css';
import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import TechStack from './components/molecules/TechStack';
import TodoForm from './components/molecules/TodoForm';

const App = () => (
  <div className="App bg-zinc-900">
    <Header />

    <main className="container mx-auto mt-6">
      <TechStack />

      <TodoForm />

      <div className="mt-10">
        <ul className="text-left grid grid-cols-4 gap-4 ">
          <li className="rounded-2xl px-4 py-4 bg-white">
            <div>作成日:2022.9.12</div>
            <div>Status:TODO</div>
            <div>Task:Making API</div>
            <button
              type="button"
              className="font-bold mt-3 block text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
