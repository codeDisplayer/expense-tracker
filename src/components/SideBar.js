import * as React from 'react';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
} from '@mui/material';

function tabsContainerStyles(width) {
  return {
    margin: '30px auto',
    display: 'flex',
    height: 224,
    flexGrow: 1,
    width: width,
  }
}
const tabsStyles = {
  bgcolor: 'rgba(255,255,255, 0.5)',
  padding: 1,
  borderRight: 1,
  borderColor: 'divider',
  flexGrow: 1,
  border: 'none'
}

export default function SideBar({ setMenuItem, menuItem }) {

  const handleChange = (event, newValue) => {
    setMenuItem(newValue);
  };

  return (
    <Container sx={{ width: '100%', height: '100%', backgroundColor: '#333333', padding: '10px' }}>
      <Typography component="h1" variant="h5" color="primary" sx={{ paddingTop: 4 }}>Dashboard</Typography>
      <Box
        sx={() => tabsContainerStyles(200)}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={menuItem}
          onChange={handleChange}
          sx={tabsStyles}
        >
          <Tab label="Expenses Analysis" key="1" value={'expenses-analysis'} />
          <Tab label="Advanced Expenses Analysis" disabled key="2" value={'advanced-expenses-analysis'} />
        </Tabs>
      </Box>
    </Container>
  );
}