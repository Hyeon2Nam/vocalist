import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material/index';
import CustomColorButton from './CustomColorButton';

const ActionButton = ({ onAction, text, color }) => {
  return (
    <div>
      <CustomColorButton
        button={
          <Button className="button" color={color} onClick={onAction}>
            {text}
          </Button>
        }
      />
    </div>
  );
};

ActionButton.propTypes = {
  onAction: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ActionButton;
