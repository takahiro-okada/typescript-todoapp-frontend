import { Link } from 'react-router-dom';

const Header = () => (
  <header className="py-4">
    <div className="container mx-auto flex justify-between items-center align-middle">
      <h1 className="text-xl mb:text-3xl font-bold text-gray-50">Todo App</h1>
      <nav className="bg-red">
        <ul className="flex">
          <li className="px-2 mb:px-4 font-bold text-gray-50">
            <Link to="/">TODO</Link>
          </li>
          <li className="px-2 mb:px-4 font-bold text-gray-50">
            <Link to="/">Github</Link>
          </li>
          <li className="px-2 mb:px-4 font-bold text-gray-50">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
