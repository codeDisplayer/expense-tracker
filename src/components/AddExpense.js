import React, { useState, useRef } from 'react';
import {
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Alert,
  Typography,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
} from "@mui/material";
import { useExpensesContext } from '../contexts/ExpensesContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { getColor, readyToUseCategories } from '../constants';


export default function AddExpense() {
  const { setExpenses, customCategory } = useExpensesContext();
  const [category, setCategory] = useState('bills');
  const [error, setError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const expenseInputRef = useRef();
  const amountInputRef = useRef();

  const handleChange = eventObj => {
    setCategory(eventObj.target.value);
    console.log(category)
  };
  
  const handleSaveExpense = (e) => {
    if (expenseInputRef.current.value.length < 1 || amountInputRef.current.value.length < 1) {
      setError('Please fill in the inputs ❤.');
      setTimeout(() => { setError('') }, 4000)
      return;
    }
    setError('');

    const newExpense = {
      title: expenseInputRef.current.value.toString(),
      amount: parseInt(amountInputRef.current.value),
      category: category,
      color: getColor(category)
    }
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    e.preventDefault();
  }

  const handleAddCustomCategory = () => {
    navigate('/profile/custom-categories', { state: { from: location.pathname } });
  }

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}

      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="expense-title">Expense Title</InputLabel>
        <Input id="expense-title" type="text" inputRef={expenseInputRef} />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="expense-amount">Amount</InputLabel>
        <Input
          id="expense-amount"
          type="number"
          inputRef={amountInputRef}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>

      <Typography>Choose this expense's category:</Typography>

      <ToggleButtonGroup
        fullWidth
        color="primary"
        value={category}
        exclusive
        onChange={handleChange}
      >
        {
          readyToUseCategories.map((category, index) => {
            return <ToggleButton value={category.value} key={'category-' + index}>{category.text}</ToggleButton>
          })
        }
        {  customCategory?.map((customMadeCategory, index) => {
            return <ToggleButton value={customMadeCategory} key={'customCategory-' + index}>{customMadeCategory}</ToggleButton>
          })
        }
        <Button variant="outlined" onClick={handleAddCustomCategory}>Add custom category</Button>
      </ToggleButtonGroup>
      <Button type="submit" variant="contained" onClick={handleSaveExpense}>Save Expense</Button>
    </>
  )
}