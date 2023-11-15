// Import React and ReactDOM from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component
import { App } from 'components/App';

// Import the main stylesheet for styling
import './index.css';

// Import Provider from 'react-redux' for connecting the React app to the Redux store
import { Provider } from 'react-redux';

// Import persistor and store from './redux/store'
import { persistor, store } from './redux/store';

// Import PersistGate from 'redux-persist/integration/react' for persisting state
import { PersistGate } from 'redux-persist/integration/react';

// Use ReactDOM.createRoot for rendering in Concurrent Mode
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the app with React.StrictMode for additional development mode checks
  <React.StrictMode>
    {/* Provider to connect the app to the Redux store */}
    <Provider store={store}>
      {/* PersistGate to persist and rehydrate the Redux store */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Render the main App component */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
