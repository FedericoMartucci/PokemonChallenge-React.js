import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client'
import client from './utils/apollo-client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
      <React.StrictMode>
      <ApolloProvider client={ client }>
        <App />
      </ApolloProvider>
      </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
