import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { FormEmailInput } from '../molecules/FormEmailInput';
import { FormPasswordInput } from '../molecules/FormPasswordInput';

export const Register: React.VFC = () => {
  console.log('hoge');

  const signin = () => {
    alert('sign in!!!');
  };
  return (
    <div className="container mx-auto max-w-lg">
      <div className="flex justify-center">
        <h2 className="mt-14 text-white text-3xl">Register</h2>
      </div>
      <div className="mt-14">
        <FormEmailInput />
        <FormPasswordInput />
        <div className="mt-10">
          <Button title="Sign in" onClick={signin} />
        </div>
        <div className="mt-5 text-white flex justify-end">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};
