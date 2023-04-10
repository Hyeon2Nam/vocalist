/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { remadeContent, setMessage } from '../../modules/data';
import MultipleChoice from './MultipleChoice';
import Question from './Question';
import '../../styles/Study.scss';
import AlertSnackBar from '../common/AlertSnackBar';

const Study = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { content, remade, firstComplete, message } = useSelector(
    ({ data }) => ({
      content: data.content,
      remade: data.remade,
      firstComplete: data.firstComplete,
      message: data.message,
    }),
  );
  const [openSnack, setOpenSnack] = useState(false);

  const makeNewContent = () => {
    if (content && !remade) {
      let tmp = content.split('\n').map((word) => {
        let i;
        if (word.includes(')')) i = word.indexOf(')');
        else i = word.indexOf(' ');
        return [word.slice(0, i), word.slice(i + 1)];
      });
      tmp = tmp.filter((w) => w[0] !== '');

      dispatch(remadeContent(tmp));
    }
  };

  const snackbarHandler = () => {
    setOpenSnack(false);
    dispatch(setMessage(''));
  };

  useEffect(() => {
    if (content === null) navigate('/library');
    if (!content) navigate('/library');
  }, []);

  useEffect(() => {
    if (message !== '') {
      setOpenSnack(true);
    }
  }, [message]);

  return (
    <div className="study">
      {makeNewContent()}
      {/* <Question /> */}
      {firstComplete ? <Question /> : <MultipleChoice />}
      {openSnack && (
        <AlertSnackBar
          open={openSnack}
          onClose={snackbarHandler}
          message={message}
          type="success"
        />
      )}
    </div>
  );
};

export default Study;
