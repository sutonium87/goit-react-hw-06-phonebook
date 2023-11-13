// Importing necessary functions and utilities from Redux Toolkit
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Importing reducers from slices
import { contactBookReducer } from './contactBookSlice';
import { filterReducer } from './filterSlice';

// Importing Redux Persist functions and storage
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

// Configuration for Redux Persist
const persistConfig = {
  key: 'root', // Key for the persisted state in storage
  storage, // Storage engine
  blacklist: ['contacts'], // Array of slices to be persisted
};

// Combining reducers into a root reducer
const rootReducer = combineReducers({
  contacts: contactBookReducer, // Contacts slice reducer
  filter: filterReducer, // Filter slice reducer
});

// Creating a persisted root reducer using Redux Persist
const persistedRootReducer = persistReducer(persistConfig, rootReducer);

// Configuring the Redux store
export const store = configureStore({
  reducer: persistedRootReducer, // Set the persisted root reducer
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignoring non-serializable actions for Redux Persist
      },
    }),
});

// Creating a persistor for the Redux store
export const persistor = persistStore(store);
