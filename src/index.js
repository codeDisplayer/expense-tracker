import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ExpensesProvider from './contexts/ExpensesContext';
import ThemeContextProvider from './contexts/ThemeContext';
//import NoSsr from '@mui/material/NoSsr';


ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeContextProvider>
      <ExpensesProvider>
        <App />
      </ExpensesProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);