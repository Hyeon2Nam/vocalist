/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { remadeContent } from '../../modules/data';
import MultipleChoice from './MultipleChoice';
import Question from './Question';
import '../../styles/Study.scss';

const Study = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { content, remade, firstComplete } = useSelector(({ data }) => ({
    content: data.content,
    remade: data.remade,
    firstComplete: data.firstComplete,
  }));

  const makeNewContent = () => {
    if (content && !remade) {
      const tmp = content.split('\n').map((word) => {
        const i = word.indexOf(' ');
        return [word.slice(0, i), word.slice(i + 1)];
      });
      tmp.pop();
      dispatch(remadeContent(tmp));
    }
  };

  useEffect(() => {
    if (content === null) navigate('/library');
    if (!content) navigate('/library');
  }, []);

  return (
    <div className="study">
      {makeNewContent()}
      {firstComplete ? <Question /> : <MultipleChoice />}
    </div>
  );
};

export default Study;
