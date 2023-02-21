import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/dist/index';
import { Button } from '@mui/material/index';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import { useDispatch } from 'react-redux';
import CustomColorButton from './CustomColorButton';
import { allRange, setCategory, setContent } from '../../modules/data';

const CollapseButton = ({ category, title, content, child }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const setStudyData = () => {
    if (category) dispatch(setCategory(category));
    if (content) {
      dispatch(setContent(content));
    } else {
      dispatch(allRange(true, content));
    }
  };

  useEffect(() => {
    if (category) dispatch(setCategory(category));
  }, []);

  return (
    <div>
      <div className="wrapper">
        <ListItemButton onClick={handleClick}>{title}</ListItemButton>
        <Link to="/study">
          <CustomColorButton
            button={
              <Button
                className="button"
                variant="contained"
                onClick={setStudyData}
              >
                학습하기
              </Button>
            }
          />
        </Link>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {child}
        </List>
      </Collapse>
    </div>
  );
};

CollapseButton.propTypes = {
  category: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  child: PropTypes.object.isRequired,
};

export default CollapseButton;
