import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffbb00',
    },
    cancle: {
      main: '#ffb6c1',
      contrastText: 'black',
    },
    complete: {
      main: '#96B0E5',
    },
  },
});

const CustomColorButton = ({ button }) => {
  return <ThemeProvider theme={theme}>{button}</ThemeProvider>;
};

CustomColorButton.propTypes = {
  button: PropTypes.element.isRequired,
};

export default CustomColorButton;
