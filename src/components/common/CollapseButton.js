import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';

const CollapseButton = ({ title, child }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItemButton onClick={handleClick}>{title}</ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {child}
        </List>
      </Collapse>
    </div>
  );
};

CollapseButton.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  child: PropTypes.object.isRequired,
};

export default CollapseButton;
