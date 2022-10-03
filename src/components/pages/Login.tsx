import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { FormEmailInput } from '../molecules/FormEmailInput';
import { FormPasswordInput } from '../molecules/FormPasswordInput';

export const Login: React.VFC = () => {
  console.log('hoge');

  const login = () => {
    alert('login!!');
  };

  return (
    <div className="container mx-auto max-w-lg">
      <div className="flex justify-center">
        <h2 className="mt-14 text-white text-3xl">Login</h2>
      </div>
      <div className="mt-14">
        <FormEmailInput />
        <FormPasswordInput />
        <div className="mt-10">
          <Button title="Login" onClick={login} />
        </div>
        <div className="mt-5 text-white flex justify-end">
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
