import React from 'react';
import PropTypes from 'prop-types';

const SelectList = ({ list, category, value, setValue }) => {
  return (
    <div className="select-list">
      <select name="pets" value={value} onChange={setValue}>
        <option disabled value="">
          {category} 선택
        </option>
        {list}
        <option value="addBook">추가하기</option>
      </select>
    </div>
  );
};

SelectList.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  list: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default SelectList;
