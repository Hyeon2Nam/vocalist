/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material/index';
import CustomColorButton from '../common/CustomColorButton';
import * as util from '../common/utils';
import { firstComplete } from '../../modules/data';

const MultipleChoice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { content } = useSelector(({ data }) => ({
    content: data.content,
  }));
  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState('');
  const [answer, setAnswer] = useState('');
  const [options, setOptions] = useState([]);
  const [lang, setLang] = useState(util.getRandom(0, 2));
  const [disable, setDisable] = useState(true);
  const [index, setIndex] = useState(0);

  const setOption = () => {
    const tmp = [...content];
    const max = tmp.length < 3 ? tmp.length - 1 : 3;
    const tmpList = [];

    let del;
    if (lang) {
      del = tmp.indexOf(tmp.find((c) => c[1] === word));
    } else {
      del = tmp.indexOf(tmp.find((c) => c[0] === word));
    }
    tmp.splice(del, 1);

    for (let i = 0; i < max; ) {
      const s = util.getRandom(0, tmp.length);

      if (lang) {
        tmpList.push(tmp[s][0]);
      } else {
        tmpList.push(tmp[s][1]);
      }
      tmp.splice(s, 1);

      i += 1;
    }

    const s = util.getRandom(0, max);
    tmpList.splice(s, 0, answer);

    setOptions(tmpList);
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
      dispatch(firstComplete());
      return;
    }

    setIndex(index + 1);

    const s = util.getRandom(0, wordList.length);

    setWordLang(wordList[s]);
    setWordList(wordList.filter((w, i) => i !== s));
    setDisable(true);
  };

  const checkAnswer = (e) => {
    const { value } = e.target;

    if (answer === value) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    if (!content || content == null) {
      navigate('/library');
      return;
    }

    setWordList([...content]);
    setOption();
  }, []);

  useEffect(() => {
    if (!word || !answer) return;

    setOption();
    setLang(util.getRandom(0, 2));
  }, [answer]);

  if (content && content.length <= 1) {
    return (
      <div>
        단어가 적어 학습을 할 수 없습니다.
        <br />
        최소 두 단어 이상을 추가하여 주세요.
      </div>
    );
  }

  return (
    <div className="multiple-choice">
      객관식 문제 <br /> <br />
      {word && (
        <div>
          {word && (
            <div className="question-index">
              {index}/{content.length}
            </div>
          )}
          <div className="word">{word}</div>
          <div className="options">
            {options.length !== 0 &&
              options.map((w) => {
                return (
                  <CustomColorButton
                    key={w}
                    button={
                      <Button
                        value={w}
                        className="button"
                        variant="outlined"
                        onClick={checkAnswer}
                      >
                        {w}
                      </Button>
                    }
                  />
                );
              })}
          </div>
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

export default MultipleChoice;
