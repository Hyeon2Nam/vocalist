import React from 'react';
import PropTypes from 'prop-types';
import TwoButtonSet from './TwoButtonSet';

const InputField = ({ title, name, onChange, onConfirm, onCancle }) => {
  return (
    <div className="input-wrapper">
      <input placeholder={title} type="text" value={name} onChange={onChange} />
      <TwoButtonSet onConfirm={onConfirm} onCancle={onCancle} />
    </div>
  );
};

InputField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancle: PropTypes.func.isRequired,
};

export default InputField;
