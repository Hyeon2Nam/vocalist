import React, { useEffect, useState } from 'react';
import SelectList from '../common/SelectList';
import libraryData from '../../data/libraryData.json';
import TwoButtonSet from '../common/TwoButtonSet';
import InputField from '../common/InputField';
import '../../styles/InputList.scss';

const InputList = () => {
  const [selectList, setSelectList] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const [newBook, setNewBook] = useState({
    library: '',
    name: '',
    content: '',
  });
  const [newlibrary, setNewLibrary] = useState('');
  const [selectLibrary, setSelectLibrary] = useState('');
  const [libraryList, setLibraryList] = useState(libraryData.libraryList);

  const CleanField = () => {
    setNewBook({ ...newBook, name: '', content: '' });
  };

  const NewBookHandler = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const NewLibraryHandler = (e) => {
    setNewLibrary(e.target.value);
  };

  const AddModeHandler = () => {
    setAddMode(!addMode);
  };

  const LibraryHandler = (e) => {
    setSelectLibrary(e.target.value);

    if (e.target.value === 'addBook') {
      AddModeHandler();
    }
  };

  const AddNewLibrary = () => {
    if (!newlibrary) return;

    setSelectLibrary('');
    setLibraryList(libraryList.concat(newlibrary));
    setNewLibrary('');
  };

  const saveChages = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(newBook)], {
      type: 'application/json',
    });
    element.href = URL.createObjectURL(file);
    element.download = `${newBook.name}.json`;
    document.body.appendChild(element);
    element.click();
  };

  const AddNewBook = () => {
    if (!newBook) return;

    // window.localStorage.setItem(newBook.name, JSON.stringify(newBook));
    CleanField();
    saveChages();
  };

  const setSetectList = () => {
    setSelectList(
      libraryList.map((book) => {
        return (
          <option key={book} value={book}>
            {book}
          </option>
        );
      }),
    );
  };

  useEffect(() => {
    if (libraryList) {
      setSetectList();
      // window.localStorage.setItem('library', JSON.stringify(libraryList));
    }
  }, []);

  useEffect(() => {
    setSetectList();
  }, [libraryList]);

  useEffect(() => {
    setNewBook({ ...newBook, library: selectLibrary });
  }, [selectLibrary]);

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
          list={selectList}
          category="책장"
          value={selectLibrary}
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
