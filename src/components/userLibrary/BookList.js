import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import CollapseButton from '../common/CollapseButton';

const BookList = ({ list }) => {
  const makeBookItem = () => {
    return list.map((book) => {
      return (
        <div key={book.name} className="book-list">
          <CollapseButton
            title={book.name}
            child={<BookItem item={book.content} />}
          />
        </div>
      );
    });
  };

  return <div>{makeBookItem()}</div>;
};

BookList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  list: PropTypes.array.isRequired,
};

export default BookList;
