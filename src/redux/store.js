// Import necessary dependencies from '@reduxjs/toolkit'
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Import reducers from individual slices
import { contactBookReducer } from './contactBookSlice';
import { filterReducer } from './filterSlice';

// Import necessary dependencies for Redux persist
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

// Import storage from 'redux-persist/lib/storage'
import storage from 'redux-persist/lib/storage';

// Configuration for Redux persist
const persistConfig = {
  key: 'root', // Key for the root of the persisted state
  storage, // Storage engine for persisting state
  whitelist: ['contacts'], // List of slices to persist
};

// Combine individual reducers into a root reducer
const rootReducer = combineReducers({
  contacts: contactBookReducer,
  filter: filterReducer,
});

// Create a persisted root reducer using Redux persist
const persistedRootReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedRootReducer, // Use the persisted root reducer
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // Configure middleware with serializableCheck
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create a persistor for persisting the Redux store
export const persistor = persistStore(store);
