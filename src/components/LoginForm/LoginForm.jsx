import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import useForm from '../../shared/hooks/useForm';

import { initialState } from './initialState';

const LoginForm = ({ onSubmit }) => {
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input
          id={emailId}
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
          placeholder="Input email"
          required
        />
      </div>
      <div>
        <label htmlFor={passwordId}>Password:</label>
        <input
          id={passwordId}
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Input password"
          type="password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
