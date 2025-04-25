import React from 'react';
import AppLayout from './components/AppLayout';
import './App.css';  // For additional global styling
import { ThemeProvider } from './components/ThemeContext';


function App() {
  return (
    <ThemeProvider>
          <AppLayout />
    </ThemeProvider>
  );
}

export default App;
