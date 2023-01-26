import React from 'react';
import { Button } from '@mui/material/index';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import '../../styles/Library.scss';

const Library = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="library">
      <Button variant="contained">단어장 추가</Button>
      <div className="list-wrapper">
        <List sx={{ width: '100%', maxWidth: '50%' }}>
          <ListItemButton>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Drafts" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="adsfasdf" />
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
};

export default Library;
