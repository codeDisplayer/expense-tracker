/*
  add expenses, categories them and show some insights like:
  how much expenses went towards food, education, entertainment, bills, and travel etc.

*/

import Expenses from '../components/Expenses';
import AddExpense from '../components/AddExpense';
import { Backdrop, Box, Container, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Homepage({ addingExpenseIsOpen, setAddingExpenseIsOpen }) {
  const handleClose = () => {
    setAddingExpenseIsOpen(false)
  }

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addingExpenseIsOpen}
      >
        <Container sx={{ width: '850px', height: '550px', backgroundColor: '#f2f2f2', borderRadius: '10px' }}>
          <IconButton onClick={handleClose} edge="start" color="error">
            <CloseIcon fontSize='large' />
          </IconButton>
          <Box sx={{ width: '800px', height: '500px' }}>
            <AddExpense/>
          </Box>
        </Container>
      </Backdrop>
      <Expenses />
    </div>
  );
};