import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContactsFetch,
  deleteContacts,
} from './contact-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.items = payload;
      store.loading = false;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addContactsFetch.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addContactsFetch.fulfilled]: (store, { payload }) => {
      store.items.push(payload);
      store.loading = false;
    },
    [addContactsFetch.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [deleteContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [deleteContacts.fulfilled]: (store, { payload }) => {
      store.items = store.items.filter(item => item.id !== payload);
      store.loading = false;
    },
    [deleteContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;
