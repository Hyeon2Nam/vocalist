import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material/index';
import CustomColorButton from './CustomColorButton';

const TwoButtonSet = ({ onConfirm, onCancle }) => {
  return (
    <div className="button-wrapper">
      <CustomColorButton
        button={
          <Button
            className="button"
            variant="contained"
            color="cancle"
            onClick={onCancle}
          >
            취소
          </Button>
        }
      />
      <CustomColorButton
        button={
          <Button className="button" variant="contained" onClick={onConfirm}>
            추가
          </Button>
        }
      />
    </div>
  );
};

TwoButtonSet.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancle: PropTypes.func.isRequired,
};

export default TwoButtonSet;
