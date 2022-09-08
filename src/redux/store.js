import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './contacts/contact-slice';
import authReducer from './auth/aut-slice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// const persistedContactsReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// store = {
//    contactReducer: {
//       auth: {},
//       contacts: {},
//   }
// }

// store = {
//   auth: {},
//   contacts: {},
// }

export const persistore = persistStore(store);
