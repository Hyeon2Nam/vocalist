/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material/index';
import TextField from '@mui/material/TextField';
import CustomColorButton from '../common/CustomColorButton';
import * as util from '../common/utils';
import ActionButton from '../common/ActionButton';
import { setMessage } from '../../modules/data';

const Question = () => {
  const dispatch = useDispatch();
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
  const [wrongWrodList, setWrongWrodList] = useState([]);
  const [startWrong, setStartWrong] = useState(false);
  const [maxIndex, setMaxIndex] = useState(content.length);

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

  // const setWordLang = (set) => {
  //   if (!set) return;
  //   setLang(1);
  //   setWord(set[1]);
  //   setAnswer(set[0]);
  // };

  const setNewExam = () => {
    setIndex(0);
    setWordList(wrongWrodList);
    setStartWrong(true);
    setWrongWrodList([]);
  };

  const setExam = () => {
    if (wordList.length === 0 && wrongWrodList.length === 0) {
      setStartWrong(false);
      navigate('/library');
    } else if (wordList.length === 0 && wrongWrodList.length !== 0) {
      setNewExam();
      return;
    }

    const s = util.getRandom(0, wordList.length);
    setLang(util.getRandom(0, 2));
    setWordLang(wordList[s]);
    setWordList(wordList.filter((w, i) => i !== s));

    setIndex(index + 1);
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

  const handleSkip = () => {
    setExam();
  };

  const handleAddWrongWord = () => {
    let wrongWord;

    if (lang) {
      wrongWord = [`${answer}`, `${word}`];
    } else {
      wrongWord = [`${word}`, `${answer}`];
    }

    if (
      wrongWrodList.length !== 0 &&
      wrongWrodList.find((w) => w[0] === wrongWord[0]) !== undefined
    )
      return;

    setWrongWrodList(wrongWrodList.concat([wrongWord]));

    dispatch(setMessage('추가되었습니다.'));
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

  useEffect(() => {
    if (wordList.length !== 0 && startWrong) {
      setStartWrong(false);
      setMaxIndex(wordList.length);
      setExam();
    }
  }, [startWrong, wordList]);

  return (
    <div className="question">
      {content.length !== maxIndex ? '오답 노트' : '주관식 문제'}
      <br /> <br />
      {word && (
        <div className="question-index">
          {index}/{maxIndex}
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
      {word && (
        <div className="word-button">
          <ActionButton
            color="primary"
            text="오답노트 추가"
            onAction={handleAddWrongWord}
          />
          <ActionButton color="complete" text="skip" onAction={handleSkip} />
        </div>
      )}
    </div>
  );
};

export default Question;
