import React from 'react';
import BookList from './BookList';
import libraryData from '../../data/libraryData.json';
import CollapseButton from '../common/CollapseButton';

const GetAllBooks = () => {
  const makeLibraryList = () => {
    return libraryData.libraryList.map((category) => {
      return (
        <div key={category} className="category">
          <CollapseButton
            title={category}
            child={<BookList list={libraryData[category]} />}
          />
        </div>
      );
    });
  };

  return <div>{makeLibraryList()}</div>;
};

export default GetAllBooks;
