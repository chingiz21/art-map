import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import userState from './store/userState';
import { ContextType } from './utils/types';

export const Context = createContext<ContextType | null>(null);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={{ user: userState }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
