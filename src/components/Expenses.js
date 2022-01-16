import { useExpensesContext } from '../contexts/ExpensesContext';
import { Box, Grid, Grow } from "@mui/material";
import {
  ExpenseComponent, 
  TitleComponent, 
  AmountComponent, 
  CategoryComponent 
} from '../components/styled/ExpenseComponent';


export default function Expenses() {
  const { expenses } = useExpensesContext();

  return (
    <Box sx={{ marginTop: '20px', padding: '10px' }} >
      <Grid container spacing={2} >
        {
          expenses.map(({category, amount, title}, index) => {
            return <Grid item key={index} md={6} xs={12}>
              <Grow in={true}>
                <ExpenseComponent category={category}>
                  <Grid container>
                    <Grid item md={6} ><TitleComponent title={title}/></Grid>
                    <Grid item md={6}><AmountComponent amount={amount}/></Grid>
                    <Grid item md={12}><CategoryComponent category={category}/></Grid>
                  </Grid>
                </ExpenseComponent>
              </Grow>
            </Grid>
          })
        }
      </Grid>
    </Box>
  )
}