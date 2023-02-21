import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eabbfd',
    },
    cancle: {
      main: '#ffb6c1',
      contrastText: 'black',
    },
    complete: {
      main: '#96B0E5',
    },
    action: {
      disabledBackground: '#ac89b9',
      borderColor: '#eabbfd',
    },
  },
  notchedOutline: {
    borderColor: '#eabbfd',
  },
});

const CustomColorButton = ({ button }) => {
  return <ThemeProvider theme={theme}>{button}</ThemeProvider>;
};

CustomColorButton.propTypes = {
  button: PropTypes.element.isRequired,
};

export default CustomColorButton;
