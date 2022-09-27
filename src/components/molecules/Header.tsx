const Header = () => {
  console.log('TEST');

  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-50">LOGO</h1>
        <nav className="bg-red">
          <ul className="flex">
            <li className="px-4 font-bold text-gray-50">TODO</li>
            <li className="px-4 font-bold text-gray-50">Github</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
