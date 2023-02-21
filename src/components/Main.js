import React from 'react';
import { Link } from 'react-router-dom/dist/index';
import { Button } from '@mui/material/index';
import '../styles/Main.scss';

const Main = () => {
  return (
    <div className="select-button-wrapper">
      <Link to="/library">
        <Button className="select-button">학습하기</Button>
      </Link>
      <Link to="/input">
        <Button className="select-button">단어장 추가</Button>
      </Link>
    </div>
  );
};

export default Main;
