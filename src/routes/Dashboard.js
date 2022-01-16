import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useExpensesContext } from '../contexts/ExpensesContext';

import AreaChartComponent from '../components/charts/AreaChartComponent';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';

const AreaChartContainerStyles = {
  backgroundColor: 'rgba(0,0,0, 0.2)',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function Dashboard({ setForwardBackTo }) {
  const [menuItem, setMenuItem] = React.useState('expenses-analysis');

  const { expenses } = useExpensesContext();
  

  return (
    <Grid container height={'calc(100vh - 65px)'}>
      <Grid item md={3}>
        <SideBar setMenuItem={setMenuItem} menuItem={menuItem}/>
      </Grid>
      <Grid item md={9}>
        <Box sx={AreaChartContainerStyles}>
          {expenses.length > 1 ? <AreaChartComponent expenses={expenses} menuItem={menuItem} />
            : <Typography>No expenses to be shown yet. <Link to="/">Add one</Link></Typography>
          }
        </Box>
      </Grid>
    </Grid>
  )
}