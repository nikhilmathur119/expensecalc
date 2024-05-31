import React, { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Input from './Components/Input.jsx';
import MonthlyExpense from './Components/MonthlyExpense.jsx';
import theme from './Components/Theme.js';

function App() {
  const storeditem = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(storeditem || []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Input items={items} setItems={setItems} />
      </div>
    </ThemeProvider>
  );
}

export default App;
