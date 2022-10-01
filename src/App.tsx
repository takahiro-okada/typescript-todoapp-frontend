import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import TodoDones from './components/molecules/TodoDones';
import TodoForm from './components/molecules/TodoForm';
import TodoList from './components/molecules/TodoList';

const App = () => (
  <div className="App bg-zinc-900">
    <Header />

    <main className="container mx-auto mt-6">
      {/* <TechStack /> */}

      <TodoForm />

      <TodoList />

      <TodoDones />
    </main>
    <Footer />
  </div>
);

export default App;
