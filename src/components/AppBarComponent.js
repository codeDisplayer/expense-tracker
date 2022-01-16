import { AppBar, Toolbar, Button, Box } from "@mui/material";
import MoneyIcon from '@mui/icons-material/AttachMoney';
import { useLocation, useNavigate } from "react-router-dom";

export default function AppBarComponent({ setAddingExpenseIsOpen }) {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const handleAddingExpense = () => {
    setAddingExpenseIsOpen(true);
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <MoneyIcon sx={{ marginRight: '15px' }} />

          <div style={{ flexGrow: 1 }}>
            {location !== '/dashboard' ?
              <Button 
              color="inherit" 
              variant="text" 
              sx={{ flexGrow: 1 }}
              onClick={() => navigate('/dashboard')}
              >Dashboard</Button>
              : <Button 
              color="inherit" 
              variant="text" 
              sx={{ flexGrow: 1 }}
              onClick={() => navigate('/')}
              >Home</Button>
            }
          </div>

          {location === '/' &&
            <Button color="inherit" variant="outlined" onClick={handleAddingExpense}>Add Expense</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};