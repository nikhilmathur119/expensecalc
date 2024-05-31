import { createTheme } from '@mui/material/styles';
import {pink, indigo, deepPurple, lightBlue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: indigo[100],
    },
    success: {
      main: lightBlue[500],
    },
    background: {
      default: '#f4e1ff',
    },
    tertiary:{
        main: pink[100],
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#000',
          borderWidth: '1px', // Minor change: add 'px' for clarity
          borderColor: '#000000',
          border:'solid .5px black',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          borderWidth: '2px', // Minor change: add 'px' for clarity
          borderColor: '#000000',
          color:'black',
        },
      },
    },
  },
});

export default theme;
