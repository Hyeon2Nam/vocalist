import React, { useEffect, useState } from 'react';
// import { writeJsonFile } from 'write-json-file';
import SelectList from '../common/SelectList';
import libraryData from '../../data/libraryData.json';
import TwoButtonSet from '../common/TwoButtonSet';
import InputField from '../common/InputField';
import '../../styles/InputList.scss';

const InputList = () => {
  const [bookList, setBookList] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const [newBook, setNewBook] = useState({ name: '', content: '' });
  const [newlibrary, setNewLibrary] = useState('');
  const [library, setLibrary] = useState('');

  const NewBookHandler = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const AddModeHandler = () => {
    setAddMode(!addMode);
  };

  const LibraryHandler = (e) => {
    setLibrary(e.target.value);

    if (e.target.value === 'addBook') {
      AddModeHandler();
    }
  };

  const NewLibraryHandler = (e) => {
    setNewLibrary(e.target.value);
  };

  const CleanField = () => {
    setNewBook({ name: '', content: '' });
  };

  const AddNewLibrary = () => {
    if (!newlibrary) return;

    console.log(newlibrary);
    setNewLibrary('');
  };

  const AddNewBook = () => {
    if (!newBook) return;

    console.log(newBook);
    // if (libraryData[library]) {
    //   libraryData =
    // }
    CleanField();
  };

  useEffect(() => {
    if (libraryData.libraryList) {
      setBookList(
        Object.keys(libraryData).map((book) => {
          return (
            <option key={book} value={book}>
              {book}
            </option>
          );
        }),
      );
    }
  }, []);

  return (
    <div className="input-list">
      {addMode ? (
        <InputField
          title="새로운 책장을 입력해주세요."
          name={newlibrary}
          onChange={NewLibraryHandler}
          onConfirm={AddNewLibrary}
          onCancle={AddModeHandler}
        />
      ) : (
        <SelectList
          list={bookList}
          category="책장"
          value={library}
          setValue={LibraryHandler}
        />
      )}
      <div className="word-input-wrapper">
        <input
          placeholder="책 제목을 입력해주세요."
          name="name"
          value={newBook.name}
          onChange={NewBookHandler}
        />
        <textarea
          className="word-area"
          placeholder="단어 뜻, 뜻1"
          onChange={NewBookHandler}
          value={newBook.content}
          name="content"
        />
        <TwoButtonSet onConfirm={AddNewBook} onCancle={CleanField} />
      </div>
    </div>
  );
};

export default InputList;
