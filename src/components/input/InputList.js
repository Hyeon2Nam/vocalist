import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectList from '../common/SelectList';
import TwoButtonSet from '../common/TwoButtonSet';
import InputField from '../common/InputField';
import libraryData from '../../data/libraryData.json';
import '../../styles/InputList.scss';
import AlertSnackBar from '../common/AlertSnackBar';
import { setMessage } from '../../modules/data';

const InputList = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(({ data }) => ({
    message: data.message,
  }));

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
  const [openSnack, setOpenSnack] = useState(false);

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
      dispatch(setMessage('책장의 이름이 비어있습니다.'));
      return;
    }
    if (newlibrary.toLowerCase() === 'addbook') {
      dispatch(setMessage('다른 이름으로 해주십시오.'));
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
    if (!newBook.name || !newBook.content) {
      dispatch(setMessage('내용이 비어있습니다.'));
      return;
    }
    if (!selectLibrary || selectLibrary.toLowerCase() === 'addbook') {
      dispatch(setMessage('책을 저장할 책장이 선택 되어있지 않습니다.'));
      return;
    }

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

  const snackbarHandler = () => {
    setOpenSnack(false);
    dispatch(setMessage(''));
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

  useEffect(() => {
    if (message !== '') {
      setOpenSnack(true);
    }
  }, [message]);

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
      {openSnack && (
        <AlertSnackBar
          open={openSnack}
          onClose={snackbarHandler}
          message={message}
          type="error"
        />
      )}
    </div>
  );
};

export default InputList;
