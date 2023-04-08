import React, { useEffect, useState } from 'react';
import SelectList from '../common/SelectList';
import TwoButtonSet from '../common/TwoButtonSet';
import InputField from '../common/InputField';
import libraryData from '../../data/libraryData.json';
import '../../styles/InputList.scss';

const InputList = () => {
  const [selectList, setSelectList] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const [newBook, setNewBook] = useState({
    name: '',
    content: '',
  });
  const [newlibrary, setNewLibrary] = useState('');
  const [selectLibrary, setSelectLibrary] = useState('');
  const [library, setLibrary] = useState(libraryData);
  const [download, setDownload] = useState(false);

  const CleanField = () => {
    setNewBook({ name: '', content: '' });
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
    if (!newlibrary) {
      alert('책장의 이름이 비어있습니다.');
      return;
    }
    if (newlibrary === 'addbook') {
      alert('다른 이름으로 해주십시오.');
      setNewLibrary('');
      return;
    }

    setLibrary({
      ...library,
      libraryList: library.libraryList.concat(newlibrary),
      [newlibrary]: [],
    });
    setNewLibrary('');
    setSelectLibrary('');
  };

  const AddNewBook = () => {
    if (!newBook || !selectLibrary) return;

    setLibrary({
      ...library,
      [selectLibrary]: library[selectLibrary].concat(newBook),
    });
    CleanField();
    setDownload(true);
  };

  const saveChages = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(library)], {
      type: 'application/json',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'libraryData.json';
    document.body.appendChild(element);
    element.click();
  };

  const setSetectList = () => {
    setSelectList(
      library.libraryList.map((book) => {
        return (
          <option key={book} value={book}>
            {book}
          </option>
        );
      }),
    );
  };

  useEffect(() => {
    if (library.libraryList) {
      setSetectList();
    }
  }, []);

  useEffect(() => {
    setSetectList();
  }, [library.libraryList]);

  useEffect(() => {
    if (download) saveChages();
    setDownload(false);
  }, [download]);

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
          placeholder="단어는 [단어 뜻, 뜻1] 문장은 [문장)뜻] ([]<=괄호 입력 X)"
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
