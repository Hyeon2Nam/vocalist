import React from 'react';
import List from '@mui/material/List';
import GetAllBooks from './GetAllBooks';
import '../../styles/Library.scss';

const Library = () => {
  return (
    <div className="library">
      <List sx={{ width: '100%' }}>
        <GetAllBooks />
      </List>
    </div>
  );
};

export default Library;
