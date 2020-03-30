import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Box';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    cursor: 'pointer'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const arrowStyle = {
  position: 'absolute',
  width: '10px',
  height: '10px',
  background: 'white',
  transform: 'rotate(45deg)',
};
const arrowStyleForBottomStart = {
  top: '-5px',
  left: '12px'
};
const arrowStyleForBottomEnd = {
  top: '-5px',
  right: '12px'
};

export const ButtonWithPopup = ({
  ButtonContent,
  popperPlacement,
  popperOffset,
  children
                                }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);
  const arrowRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

  const close = () => setIsOpen(false);

  const open = () => setIsOpen(true);

  const handleClickOutside = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    close();
  };

  const getArrowStyle = () => {
    let positioningStyle;
    switch (popperPlacement) {
      case 'bottom-start': {
        positioningStyle = arrowStyleForBottomStart;
        break;
      }
      case 'bottom-end': {
        positioningStyle = arrowStyleForBottomEnd;
        break;
      }
      default: {
        positioningStyle = {};
      }
    }

    return { ...arrowStyle, ...positioningStyle };
  };

  return (
    <>
      <Button
        className={classes.root}
        ref={anchorRef}
        aria-controls={isOpen ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <ButtonContent />
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
      <Popper
        placement={popperPlacement}
        open={isOpen}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        modifiers={{
          offset: popperOffset ? { offset: popperOffset } : undefined,
          arrow: {
            enabled: true,
            element: arrowRef.current
          }
        }}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: popperPlacement }}
          >
            <Paper>
              <span style={getArrowStyle()} ref={arrowRef} />
              <ClickAwayListener onClickAway={handleClickOutside}>
                {children({ isOpen, open, close })}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
};
