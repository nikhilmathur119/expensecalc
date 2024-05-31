import React from 'react';
import { Box, Typography } from '@mui/material';

const MonthlyExpense = ({ items }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  let monthlyExpenses = 0;
  let yearlyExpenses=0;

  items.forEach((item) => {
    const expenseDate = new Date(item.date);
    if (expenseDate.getMonth() === currentMonth) {
      monthlyExpenses += parseFloat(item.number);
    }
    if(expenseDate.getFullYear()===currentYear){
        yearlyExpenses+=parseFloat(item.number);
    }
  });
  
  return (
    <Box  bgcolor="white" p={2} zIndex={1}>
      <Typography variant="body1">
        Total Expenses for {currentMonth + 1}/12: ${monthlyExpenses.toFixed(2)}
      </Typography>
      <Typography variant='body1'>
      Total Expenses for {currentYear}:${yearlyExpenses.toFixed(2)}
      </Typography>
    </Box>
  );
};

export default MonthlyExpense;
