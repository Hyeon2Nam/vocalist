import React from 'react';
import BookList from './BookList';
import libraryData from '../../data/libraryData.json';
import CollapseButton from '../common/CollapseButton';

const GetAllBooks = () => {
  const makeAllContentBook = (category) => {
    const allbooks = category.reduce(
      function (pre, curr) {
        return `${pre}${curr.content}\n`;
      },
      [''],
    );
    return allbooks;
  };

  const makeLibraryList = () => {
    return libraryData.libraryList.map((category) => {
      return (
        <div key={category} className="category">
          <CollapseButton
            category={category}
            title={category}
            content={makeAllContentBook(libraryData[category])}
            child={
              <BookList category={category} list={libraryData[category]} />
            }
          />
        </div>
      );
    });
  };

  return <div>{makeLibraryList()}</div>;
};

export default GetAllBooks;
