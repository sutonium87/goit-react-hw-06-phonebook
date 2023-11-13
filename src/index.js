// Importing necessary libraries and components
import React from 'react'; // React library
import ReactDOM from 'react-dom/client'; // ReactDOM client for rendering
import { App } from 'components/App'; // Importing the main App component
import './index.css'; // Importing the styles
import { Provider } from 'react-redux'; // React Redux Provider for connecting Redux to React
import { persistor, store } from './redux/store'; // Importing Redux store and persistor
import { PersistGate } from 'redux-persist/integration/react'; // Redux Persist integration for persisting state

// Rendering the root component using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrapping the entire application with Redux Provider */}
    <Provider store={store}>
      {/* Using Redux PersistGate to ensure Redux state persistence */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Rendering the main App component */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
