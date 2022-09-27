import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import TechStack from './components/molecules/TechStack';
import TodoForm from './components/molecules/TodoForm';
import TodoList from './components/molecules/TodoList';

const App = () => (
  <div className="App bg-zinc-900">
    <Header />

    <main className="container mx-auto mt-6">
      <TechStack />

      <TodoForm />

      <TodoList />
    </main>
    <Footer />
  </div>
);

export default App;
