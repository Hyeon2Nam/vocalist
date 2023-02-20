import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ item }) => {
  return <div className="book">{item}</div>;
};

BookItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default BookItem;
