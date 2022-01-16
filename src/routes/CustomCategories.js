import React, { useRef, useState } from 'react';
import { useExpensesContext } from '../contexts/ExpensesContext';
import { Alert, Box, TextField, Button } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';

export default function CustomCategories() {
  const [error, setError] = useState();
  const { setCustomCategory } = useExpensesContext();
  const customCategoryInputRef = useRef();
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddCategory = (e) => {
    //validate
    if(customCategoryInputRef.current.value.length < 1 ) {
      setError('Please fill the category name input.');
      setTimeout(() => setError('') ,3000);
      return;
    }
    setError('');

    setCustomCategory(prevCustomCategories => [...prevCustomCategories, customCategoryInputRef.current.value]);

    //if this page poped up using navigate, return to from where it navigated.
    location.state && navigate(location.state.from, {replace: true});
    e.preventDefault();
  }

  return (
    <Box>
      {error && <Alert severity='error'>{error}</Alert>}
      <TextField placeholder="New category name.." inputRef={customCategoryInputRef} fullWidth/>
      <Button type="submit" onClick={handleAddCategory}>Add Category</Button>
    </Box>
  )
}   