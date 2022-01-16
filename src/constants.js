import { lightBlue, red, pink, amber, deepPurple, lime } from '@mui/material/colors';


export const getColor = (category) => {
  switch(category) {
    case 'bills': return lightBlue[500];
    case 'travel': return lime[500];
    case 'food': return red[900];
    case 'entertainment': return amber[300];
    case 'education': return deepPurple[900];


    default: return pink[300];
  }
} 

export const readyToUseCategories = [
  {
    value: 'bills',
    text: 'bills'
  },
  {
    value: 'food',
    text: 'food'
  },
  {
    value: 'education',
    text: 'education'
  },
  {
    value: 'entertainment',
    text: 'entertainment'
  },
  {
    value: 'travel',
    text: 'travel'
  },
];