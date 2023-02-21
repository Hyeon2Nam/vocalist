/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as util from '../common/utils';

const Question = () => {
  const { content } = useSelector(({ data }) => ({
    content: data.content,
  }));
  const tmp = [...content];

  const setExam = () => {
    for (let i = 0; i < content.length; ) {
      const s = util.getRandom(0, tmp.length);
      // console.log(tmp[s]);
      tmp.splice(s, 1);
      i += 1;
    }
  };

  return <div>Question Question {setExam()}</div>;
};

export default Question;
