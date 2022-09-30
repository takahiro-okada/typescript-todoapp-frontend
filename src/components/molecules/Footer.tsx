const Footer = () => {
  console.log('TEST');

  return (
    <footer className="mt-20 pb-32">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-50">Footer</h1>
        <nav className="bg-red">
          <ul className="flex">
            <li className="px-4 font-bold text-gray-50">TODO</li>
            <li className="px-4 font-bold text-gray-50">Github</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
