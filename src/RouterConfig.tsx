import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/pages/Main';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

export const RouterConfig: React.VFC = () => (
  <BrowserRouter>
    <div className="App bg-zinc-900">
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
