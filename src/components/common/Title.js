import React from 'react';
import { Link } from 'react-router-dom/dist/index';
import '../../styles/Title.scss';

const Title = () => {
  return (
    <div className="title">
      <Link to="/">단어장</Link>
    </div>
  );
};

export default Title;
