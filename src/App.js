import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Dashboard from "./Layout/Dashboard";
import './App.css';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
