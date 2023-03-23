/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material/index';
import TextField from '@mui/material/TextField';
import CustomColorButton from '../common/CustomColorButton';
import * as util from '../common/utils';

const Question = () => {
  const navigate = useNavigate();
  const { content } = useSelector(({ data }) => ({
    content: data.content,
  }));
  const [word, setWord] = useState('');
  const [answer, setAnswer] = useState('');
  const [wordList, setWordList] = useState([]);
  const [lang, setLang] = useState(util.getRandom(0, 2));
  const [disable, setDisable] = useState(true);
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleShow = () => {
    setShow(!show);
  };
  const setWordLang = (set) => {
    if (!set) return;

    if (lang) {
      setWord(set[1]);
      setAnswer(set[0]);
    } else {
      setWord(set[0]);
      setAnswer(set[1]);
    }
  };

  const setExam = () => {
    if (wordList.length === 0) {
      navigate('/library');
      return;
    }

    setIndex(index + 1);

    const s = util.getRandom(0, wordList.length);

    setLang(util.getRandom(0, 2));
    setWordLang(wordList[s]);
    setWordList(wordList.filter((w, i) => i !== s));
    setDisable(true);
    setInput('');
    setShow(false);
  };

  const handleInput = (e) => {
    const { value } = e.target;

    setInput(value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter' && disable === false) {
      setExam();
    }
  };

  useEffect(() => {
    if (!content || content == null) {
      navigate('/library');
      return;
    }

    if (content) setWordList([...content]);
  }, []);

  useEffect(() => {
    if (answer === input) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [input]);

  return (
    <div className="question">
      단어 맞추기 <br /> <br />
      {word && (
        <div className="question-index">
          {index}/{content.length}
        </div>
      )}
      <div className="word">{word !== '' && word}</div>
      {word !== '' && (
        <div className="answer-filed">
          <CustomColorButton
            button={
              <TextField
                variant="standard"
                value={input}
                onChange={handleInput}
                onKeyPress={handleOnKeyPress}
                autoComplete="off"
                type="text"
              />
            }
          />
          <CustomColorButton
            className="answer-button"
            button={
              <Button className="button" variant="text" onClick={handleShow}>
                {show ? '정답 숨기기' : '정답 보기'}
              </Button>
            }
          />
          {show && answer}
        </div>
      )}
      <CustomColorButton
        button={
          <Button
            className="button"
            variant="contained"
            onClick={setExam}
            disabled={word === '' ? false : disable}
          >
            {word === '' ? 'START' : 'NEXT'}
          </Button>
        }
      />
    </div>
  );
};

export default Question;
