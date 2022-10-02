import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/pages/Main';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import NotFound from './components/pages/NotFound';

const App = () => (
  <BrowserRouter>
    <div className="App bg-zinc-900 px-5">
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
