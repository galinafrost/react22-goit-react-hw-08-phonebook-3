import {
  getContacts,
  remoweContacts,
  addContacts,
} from '../../shared/api/contacts';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const result = await getContacts();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContactsFetch = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await addContacts(data);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return thunkAPI.rejectWithValue({ data, status });
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/remove',
  async (id, thunkAPI) => {
    try {
      await remoweContacts(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
