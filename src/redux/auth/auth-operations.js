import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectedWithValue }) => {
    try {
      const result = await api.singup(data);
      return result;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectedWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectedWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectedWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
